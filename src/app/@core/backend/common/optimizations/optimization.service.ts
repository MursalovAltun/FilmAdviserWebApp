import { OptimizationTableColumn } from '../../../interfaces/movie-adviser/optimization-table-column';

export class OptimizationService {
  constructor() {}

  public FullCherryPick(data: any[], columns: OptimizationTableColumn[]) {
    const startTime = Date.now();
    data = JSON.parse(JSON.stringify(data));
    const colLaneId = columns.find(x => x.type === 'laneId');
    const colPrice = columns.find(x => x.type === 'price');
    const colBaseline = columns.find(x => x.type === 'baseline');
    const colCountContainers = columns.find(x => x.type === 'countContainers');

    const lanes = {};
    const laneIds = [];

    data.forEach(element => {
      if (lanes[element[colLaneId.fieldName]]) {
        lanes[element[colLaneId.fieldName]].push(element);
      } else {
        lanes[element[colLaneId.fieldName]] = [element];
        laneIds.push(element[colLaneId.fieldName]);
      }
    });

    laneIds.forEach(id => {
      lanes[id].sort((x, y) => x[colPrice.fieldName] - y[colPrice.fieldName]);
      let idx = 1;
      lanes[id].forEach(tt => {
        tt['rank'] = idx++;
      });
    });

    let totalBaseline = 0;
    let totalPrice = 0;

    data
      .filter(x => x.rank === 1)
      .forEach(element => {
        const countContainers = parseFloat(
          element[colCountContainers.fieldName]
        );
        totalBaseline +=
          parseFloat(element[colBaseline.fieldName]) * countContainers;
        totalPrice += parseFloat(element[colPrice.fieldName]) * countContainers;
      });

    const endTime = Date.now();
    return {
      totalBaseline,
      totalPrice,
      data
    };
  }

  public FullCherryPickOriginDest(
    data: any[],
    columns: OptimizationTableColumn[]
  ) {
    const startTime = Date.now();

    data = JSON.parse(JSON.stringify(data));
    const colLaneId = columns.find(x => x.type === 'laneId');
    const colPrice = columns.find(x => x.type === 'price');
    const colBaseline = columns.find(x => x.type === 'baseline');
    const colCountContainers = columns.find(x => x.type === 'countContainers');
    const colLocations = [];

    const lanes = {};
    const laneIds = [];

    columns.forEach(element => {
      if (
        element.type === 'city' ||
        element.type === 'country' ||
        element.type === 'region' ||
        element.type === 'uncode'
      ) {
        colLocations.push(element.fieldName);
      }
    });

    data.forEach(element => {
      let filed = '';
      colLocations.forEach(loc => {
        if (element[loc]) {
          filed += element[loc] + '-';
        }
      });
      if (lanes[filed]) {
        lanes[filed].push(element);
      } else {
        lanes[filed] = [element];
        laneIds.push(filed);
      }
    });

    laneIds.forEach(id => {
      const loc = lanes[id];
      const forwarders = [];
      loc.forEach(element => {
        const f = forwarders.find(x => x.forwarderId === element.forwarderId);
        if (f) {
          f.price += parseFloat(element[colPrice.fieldName]);
        } else {
          forwarders.push({
            forwarderId: element.forwarderId,
            price: parseFloat(element[colPrice.fieldName])
          });
        }
      });

      forwarders.sort((x, y) => x.price - y.price);
      let idx = 1;
      forwarders.forEach(f => {
        loc
          .filter(x => x.forwarderId === f.forwarderId)
          .forEach(element => {
            element['rank'] = idx;
          });
        idx++;
      });

      // lanes[id].sort((x, y) => x[colPrice.fieldName] - y[colPrice.fieldName]);
      // let idx = 1;
      // lanes[id].forEach(tt => {
      //   tt['rank'] = idx++;
      // });
    });

    let totalBaseline = 0;
    let totalPrice = 0;

    data
      .filter(x => x.rank === 1)
      .forEach(element => {
        const countContainers = parseFloat(
          element[colCountContainers.fieldName]
        );
        totalBaseline +=
          parseFloat(element[colBaseline.fieldName]) * countContainers;
        totalPrice += parseFloat(element[colPrice.fieldName]) * countContainers;
      });

    const endTime = Date.now();
    return {
      totalBaseline,
      totalPrice,
      data
    };
  }
}
