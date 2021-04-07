const dscc = require('@google/dscc');
//const d3 = Object.assign({}, require('d3'), require('d3-graphviz')); //cannot get element
const d3 = require('d3');
const local = require('./localMessage.js');
//import * as ut from './utils.js';
const $ = require('jquery');
  
const vis = Object.assign({}, require('vis-data'), require('vis-network'));

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

// write viz code here
const parseData = data => {
  // only 2 dimensions
  var dimNodes1 = data.map(function(row) {
    return row['dimensions'][0];
  });
  var dimNodes2 = data.map(function(row) {
    return row['dimensions'][1];
  });

  var uniqueNodes = Array.from(new Set(dimNodes1.concat(dimNodes2)));
  
  //console.log(uniqueNodes);
  var nodes = uniqueNodes.map(function(d) {
	var node = {};
	switch (d) {
		case "CASE_START":
			node = {
				id: uniqueNodes.indexOf(d),
				label: "Start",
				shape: "ellipse",
				color: {
					background: "greenyellow",
				},
				physics: false
			};
			break;
		case "CASE_END":
			node = {
				  id:uniqueNodes.indexOf(d), 
				  label: "End", 
				  shape: "ellipse",
				  color: {
						background: "Gold",
					},
				  physics: false
			};
			break;
		default:
			node = {
				id: uniqueNodes.indexOf(d),
				label: d,
				shape: "box",
				widthConstraint: 90,
				physics: false
			};
	}
	  
    return node;
  });
  // nodes.push({
	  // id:nodes.length, 
	  // label: "End", 
	  // shape: "ellipse",
	  // color: {
			// background: "Gold",
		// },
	  // physics: false
  // })

  var edges = data.map(function(row) {
	// if(row['dimensions'][0]=="") {console.log(row);}
    // if(row['dimensions'][0]==""){
		// return {
		  // from: uniqueNodes.indexOf("Start"),
		  // to: uniqueNodes.indexOf("End"),
		  // label: 0,
		  // arrows: "to",
		  // smooth: {
			  // enabled : true,
			  // type: 'straightCross',
		  // }  
		// },
		// {
		  // from: uniqueNodes.indexOf(row['dimensions'][0]),
		  // to: uniqueNodes.indexOf(row['dimensions'][1]),
		  // label: row['metrics'][0],
		  // arrows: "to",
		  // smooth: {
			  // enabled : true,
			  // type: 'straightCross',
			  // // roundness : 0.5
		  // }  
		// };
	// }
	// else{
		return {
		  from: uniqueNodes.indexOf(row['dimensions'][0]),
		  to: uniqueNodes.indexOf(row['dimensions'][1]),
		  label: row['metrics'][0],
		  arrows: "to",
		  smooth: {
			  enabled : true,
			  type: 'straightCross',
			  // roundness : 0.5
		  }  
		// };
	}
  });

  return {nodes, edges};
};


const styleVal = (message, styleId) => {
  // to account for color styling
  if (typeof message.style[styleId].defaultValue === 'object') {
    return message.style[styleId].value.color !== undefined
      ? message.style[styleId].value.color
      : message.style[styleId].defaultValue.color;
  }
  return message.style[styleId].value !== undefined
    ? message.style[styleId].value
    : message.style[styleId].defaultValue;
};

const draw = message => {
  const mapData = parseData(message.tables.DEFAULT);
  console.log(mapData.nodes.length);
  // remove the canvas if it exists
  d3.select('body')
    .selectAll('svg')
    .remove();
  // remove the error handler if exists
  d3.select('body')
    .selectAll('div')
    .remove();

  // set margins

  // get the width and the height of the iframe
  var width = dscc.getWidth();
  var height = dscc.getHeight();

  document.body.style.height = height;
  // set up the canvas space
  // var svg = d3
	// .select('body')
	// .append('svg')
	// .attr('width', width)
	// .attr('height', height);
	// .attr('transform', `translate(0, -5)`);
	
    var svg = d3
	.select('body')
	.append('div')
	.attr('id','graph');

  // var graphElement = document.createElement('div');
  // graphElement.id = 'graph';
  // graphElement.height = height;
  // graphElement.width = width;
  // document.body.appendChild(graphElement);
  // console.log(mainDiv);	
  // console.log(vis.DataSet);
  var graphElement = document.getElementById('graph');
  var swidth = "width:"+width+"px";
  console.log(swidth);
  graphElement.setAttribute("style", "width:"+width+"px");
  graphElement.setAttribute("style", "height:"+height+"px");

  // var nodes = new vis.DataSet([
	// for (var i=0; i < mapData.nodes.length; i++){
		// mapData.nodes[i],
	// }
    // ]);
  var nodes = new vis.DataSet(mapData.nodes);
  // create an array with edges
  var edges = new vis.DataSet(mapData.edges);

  var data = {
	nodes: nodes,
	edges: edges,
  };
  var options = {
	  edges: {
		chosen: false,
		// color: {
			// highlight: "red"
		// }			
	  },
	  // manipulation: false,
	  layout: {
		  // randomSeed : 1,
		  improvedLayout: true,
		  // clusterThreshold: 100,
		  hierarchical: {
			  enabled: true,
			  levelSeparation: 100,
			  nodeSpacing: 300,
			  treeSpacing: 400,
			  direction: 'UD',
			  // blockShifting : false,
			  // edgeMinimization : false,
			  // parentCentralization: false
		  }
		  
	  },
	  physics: {
		  enabled : false
		  // hierarchicalRepulsion: {
			  // nodeDistance: 300
		  // }
	  }

  };
  var network = new vis.Network(graphElement, data, options);
};
const drawViz = message => {
  try {
    draw(message);
  } catch (err) {
	  console.log(err);
  }
};

// renders locally
if (LOCAL) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
}
