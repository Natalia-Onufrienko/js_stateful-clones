'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const result = [];
  let currentState = { ...state }; // перша копія

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === 'clear') {
      currentState = {};
    }

    if (action.type === 'addProperties') {
      currentState = {
        ...currentState,
        ...action.extraData,
      };
    }

    if (action.type === 'removeProperties') {
      const newState = { ...currentState };

      for (let j = 0; j < action.keysToRemove.length; j++) {
        delete newState[action.keysToRemove[j]];
      }

      currentState = newState;
    }

    result.push(currentState);
  }

  return result;
}

module.exports = transformStateWithClones;
