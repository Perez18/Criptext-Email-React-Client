import { Label } from './types';
const inLabel = 10;

export const addLabels = labels => {
  return {
    type: Label.ADD_BATCH,
    labels: labels
  };
};

export const addLabel = label => {
  const labels = {
    inLabel: {
      id: inLabel,
      text: label
    }
  };
  return {
    type: Label.ADD_BATCH,
    labels: labels
  };
};

export const loadLabels = () => {
  return async dispatch => {
    try {
      const response = await fetch('/labels.json');
      const json = await response.json();
      const labels = {};
      json.labels.forEach(element => {
        labels[element.id] = {
          id: element.id,
          text: element.text
        };
      });
      dispatch(addLabels(labels));
    } catch (e) {
      // TO DO
    }
  };
};
