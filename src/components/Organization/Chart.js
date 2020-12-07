import React, { useLayoutEffect, useRef } from 'react';
import { Row } from 'antd';
import TreeChart from 'd3-org-chart';
const Chart = ({ data, userId, onSelect }) => {
  const d3Container = useRef(null);
  let chart = null;

  useLayoutEffect(() => {
    const mainData = data.map(item => ({
      nodeId: item.nodeId,
      parentNodeId: item.parentNodeId,
      borderWidth: 3,
      borderRadius: 5,
      dropShadowId: 2,
      borderColor: {
        red: 150,
        green: 150,
        blue: 150,
        alpha: 1,
      },
      backgroundColor: {
        red: 85,
        green: 160,
        blue: 252,
        alpha: 1,
      },
      width: 200,
      height: 200,
      nodeImage: {
        url: item.photoUrl,
        width: 100,
        height: 100,
        centerTopDistance: 60,
        centerLeftDistance: 100,
        cornerShape: 'ROUNDED',
        shadow: false,
        borderWidth: 0,
      },
      connectorLineColor: {
        red: 200,
        green: 200,
        blue: 200,
        alpha: 1,
      },
      connectorLineWidth: 2,
      dashArray: '',
      expanded: userId === item.nodeId || userId === item.parentNodeId,
      template: `<div>
                 <div style="text-align:center;
                              margin-top:120px;
                              font-size:16px;
                         "><b>${item.fullName}</b></div>
                 <div style="text-align:center;
                              margin-top:3px;
                              font-size:14px;
                         ">${item.position}</div>
                 <div style="text-align:center;
                             margin-top:15px;
                             font-size:13px;
                             position:absolute;
                             bottom:5px;
                            ">
                 </div>
              </div>`,
    }));

    if (mainData?.length && d3Container.current) {
      if (!chart) {
        chart = new TreeChart();
      }
      chart
        .backgroundColor('#fff')
        .container(d3Container.current)
        .data(mainData)
        .svgWidth(700)
        .initialZoom(0.4)
        .onNodeClick(currentNode => {
          onSelect(currentNode);
        })
        .render();
    }
  }, [data, userId, d3Container.current]);

  return (
    <Row justify="center">
      <div ref={d3Container} />
    </Row>
  );
};
export default Chart;
