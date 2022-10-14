import React from 'react';
import BarChart from "@cloudscape-design/components/bar-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";

export default function CalculationsResults() {
    return (
        <>
<BarChart
      series={[
        {
          title: "Site 1",
          type: "bar",
          data: [
            { x: new Date(1601103600000), y: 34503 },
            { x: new Date(1601110800000), y: 25832 },
            { x: new Date(1601118000000), y: 4012 },
            { x: new Date(1601125200000), y: -5602 },
            { x: new Date(1601132400000), y: 17839 }
          ],
          valueFormatter: e =>
            "$" + e.toLocaleString("en-US")
        },
        {
          title: "Average revenue",
          type: "threshold",
          y: 19104,
          valueFormatter: e =>
            "$" + e.toLocaleString("en-US")
        }
      ]}
      xDomain={[
        new Date(1601103600000),
        new Date(1601110800000),
        new Date(1601118000000),
        new Date(1601125200000),
        new Date(1601132400000)
      ]}
      yDomain={[-10000, 40000]}
      i18nStrings={{
        filterLabel: "Filter displayed data",
        filterPlaceholder: "Filter data",
        filterSelectedAriaLabel: "selected",
        detailPopoverDismissAriaLabel: "Dismiss",
        legendAriaLabel: "Legend",
        chartAriaRoleDescription: "line chart",
        xTickFormatter: e =>
          e
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: !1
            })
            .split(",")
            .join("\n"),
        yTickFormatter: undefined
      }}
      ariaLabel="Single data series line chart"
      errorText="Error loading data."
      height={300}
      loadingText="Loading chart"
      recoveryText="Retry"
      xScaleType="categorical"
      xTitle="Time (UTC)"
      yTitle="Revenue (USD)"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
    <h2>We suggest you get an Uber!</h2>
    <Button>Request Uber</Button>
    </>
    )
}
