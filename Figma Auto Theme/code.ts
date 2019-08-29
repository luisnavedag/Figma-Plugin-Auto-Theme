figma.showUI(__html__, {width: 380, height: 390});

const backgroundColorMappings = {
  '4b93d40f61be15e255e87948a715521c3ae957e6': {
    name: 'Primary Dark / 600',
    mapsToName: 'White',
    mapsToKey: '3eddc15e90bbd7064aea7cc13dc13e23a712f0b0',
  },
  'fb1358e5bd6dec072801298238cf49ff77b79a4b': {
    name: 'Primary Dark (Extra) / 630',
    mapsToName: 'Primary Light / 130',
    mapsToKey: '83704278c845a6a7ceb1f837387972ccb6d41960',
  },
  '287463bade90c1eed5ea4cb0b5d63794daa8aec2': {
    name: 'Primary Dark / 300',
    mapsToName: 'Primary Light / 600',
    mapsToKey: '9c23a031773711e026394f4354661c37ee5b4682',
  },
  'ef179b6abe6cb8779857e05a6333d33f7a2b9320': {
    name: 'Primary Dark / 700',
    mapsToName: 'Primary Light / 200',
    mapsToKey: 'dbd02a76b7b77c1976114c04068f0fbc22015fab',
  },
  '585945d7a147914bf73d5f05458999dc8b70c593': {
    name: 'Primary Dark (Extra) / 660',
    mapsToName: 'Primary Light (Extra) / 160',
    mapsToKey: 'b0aac6eb4fb00dde51296a4ec9f34f411bb84da9',
  },
  '865c71cc1df60da62accf2cafd7113a95e01cfcc': {
    name: 'Primary Dark (Extra) / 560',
    mapsToName: 'Primary Light (Extra) / 230',
    mapsToKey: '5c32eb6cc837b3c0c6e2be5122bb97638bcb3eb6',
  },
  '5d84ad92f3ad152f196e2093a3c0542a08dfba11': {
    name: 'Primary Dark / 400',
    mapsToName: 'Primary Light / 400',
    mapsToKey: '66d3de3ff4b9f3fc4a10f0705a334ba56466ded7',
  },
  'fa698aa2a724522a7c29efb0a662aec75a1be5a1': {
    name: 'Primary Dark / 500',
    mapsToName: 'Primary Light / 500',
    mapsToKey: '7d8703ec132ddaf6968f6d190d1e80031c559d7c',
  },
  '25b165222f45fd70dc3c8e68d1a25f8d379a597d': {
    name: 'Brand / 500',
    mapsToName: 'Brand / 500',
    mapsToKey: '25b165222f45fd70dc3c8e68d1a25f8d379a597d',
  }
}

const buttonColorMappings = {
  '3eddc15e90bbd7064aea7cc13dc13e23a712f0b0': {
    name: 'White',
    mapsToName: 'White',
    mapsToKey: '3eddc15e90bbd7064aea7cc13dc13e23a712f0b0',
  },
  '25b165222f45fd70dc3c8e68d1a25f8d379a597d': {
    name: 'Brand / 500',
    mapsToName: 'Brand / 500',
    mapsToKey: '25b165222f45fd70dc3c8e68d1a25f8d379a597d',
  }
}

const textColorMappings = {
  '3eddc15e90bbd7064aea7cc13dc13e23a712f0b0': {
    name: 'White',
    mapsToName: 'Primary Light / 900',
    mapsToKey: '620c98e8f9255a6107dee91745669e5b702b413c',
  },
  '5c77a96137b698b5575557c069cabd6877d66e1e': {
    name: 'Primary Dark / 200',
    mapsToName: 'Primary Light / 700',
    mapsToKey: '546c7d46e754ac2b23b338783d72f206b77b6436',
  },
  '287463bade90c1eed5ea4cb0b5d63794daa8aec2': {
    name: 'Primary Dark / 300',
    mapsToName: 'Primary Light / 600',
    mapsToKey: '9c23a031773711e026394f4354661c37ee5b4682',
  },
  '5d84ad92f3ad152f196e2093a3c0542a08dfba11': {
    name: 'Primary Dark / 400',
    mapsToName: 'Primary Light / 400',
    mapsToKey: '66d3de3ff4b9f3fc4a10f0705a334ba56466ded7',
  },
  'fa698aa2a724522a7c29efb0a662aec75a1be5a1': {
    name: 'Primary Dark / 500',
    mapsToName: 'Primary Light / 500',
    mapsToKey: '7d8703ec132ddaf6968f6d190d1e80031c559d7c',
  },
  'bfcdf063eb2c1edb446ba5d7880da6a324cc9b4f': {
    name: 'Primary Dark (Extra) / 360',
    mapsToName: 'Primary Light / 500',
    mapsToKey: '7d8703ec132ddaf6968f6d190d1e80031c559d7c',
  },
  '8bb8deffa51ab3eb702a934b5eec2ff19ddf1b3c': {
    name: 'Primary Dark / 100',
    mapsToName: 'Primary Light / 800',
    mapsToKey: '370a0bccfffafd7491e0ba96bc5985d013a75c3b',
  }
}

figma.ui.onmessage = msg => {

  if (msg.type === 'update-theme') {

    // If nothing is selected update the whole page
    if (figma.currentPage.selection.length === 0) {
      const frameNodes = figma.currentPage.children;
      const allNodes = figma.currentPage.findAll();
      allNodes.map(selected => updateTheme(selected));
    }
    else if (figma.currentPage.selection.length === 1) {

      // Find all the nodes
      let allNodes = figma.currentPage.selection[0].findAll();
      allNodes.unshift(figma.currentPage.selection[0]);

      // Update the nodes
      allNodes.map(selected => updateTheme(selected));
    }
    else {
      let allNodes = [];
      let nodeLength = figma.currentPage.selection.length;

      // Find all the children nodes from the selected layers
      for (let i = 0; i < nodeLength; i++) {
        allNodes.push(figma.currentPage.selection[i].findAll());
      }

      allNodes.forEach(function(selectedNode) {
        selectedNode.map(selected => updateTheme(selected));
      });
    }
  }

  function updateTheme(node) {
    switch (node.type) {
      case 'COMPONENT':
      case 'INSTANCE':
      case 'RECTANGLE':
      case 'ELLIPSE':
      case 'POLYGON':
      case 'STAR':
      case 'LINE':
      case 'BOOLEAN_OPERATION':
      case 'FRAME':
      case 'VECTOR': {
        // Check to see if the node has a style
        if (node.fillStyleId) {
          // Fetch the style by using the ID.
          let style = figma.getStyleById(node.fillStyleId);
          replaceStyles(node, style, backgroundColorMappings);
        } else if (node.backgroundStyleId) {
          let style = figma.getStyleById(node.backgroundStyleId);
          replaceBackground(node, style, backgroundColorMappings);
        }
        break
      }
      case 'TEXT': {
        if (node.fillStyleId) {
          let style = figma.getStyleById(node.fillStyleId);
          replaceStyles(node, style, textColorMappings);
        }
      }
      default: {
        // not supported, silently do nothing
      }
    }
  }

  // Replaces fills with corresponding styles
  function replaceStyles(node, style, mappings) {
    // Find the style the ID corresponds to in the team library
    let importedStyle = figma.importStyleByKeyAsync(style.key);
          
    // Once the promise is resolved, then see if the
    // key matches anything in the mappings object.
    importedStyle.then((object) => {

      // If it's null, no mapping exists yet.
      if (mappings[object.key] !== undefined) {
        let mappingStyle = mappings[object.key];
        
        // if (mappingStyle = '25b165222f45fd70dc3c8e68d1a25f8d379a597d') {
        //   correctButtonStyles(node, buttonColorMappings);
        // }

        // Use the mapping value to fetch the official style.
        let newStyle = figma.importStyleByKeyAsync(mappingStyle.mapsToKey);

        newStyle.then(function(object) {
          // Update the current style with the mapping.
          node.fillStyleId = object.id;
        });
      }
    });
  }

  // function correctButtonStyles(node, mappings) {
  //   console.log('found');
  //   console.log(node.parent);
  //   console.log(node.parent.name);
  //   console.log(node.parent.children);
  // }

  // Updates backgrounds with styles
  function replaceBackground(node, style, mappings) {
    // Find the style the ID corresponds to in the team library
    let importedStyle = figma.importStyleByKeyAsync(style.key);
          
    // Once the promise is resolved, then see if the
    // key matches anything in the mappings object.
    importedStyle.then((object) => {
      // If it's null, no mapping exists yet.
      if (mappings[object.key] !== undefined) {
        let mappingStyle = mappings[object.key];
      
        // Use the mapping value to fetch the official style.
        let newStyle = figma.importStyleByKeyAsync(mappingStyle.mapsToKey);

        newStyle.then(function(object) {
          // Update the current style with the mapping.
          node.backgroundStyleId = object.id;
        });
      }
    });
  }


  figma.closePlugin();
};