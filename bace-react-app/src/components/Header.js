import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";

import './Header.css';

export default () => {
  return (
    <Header
      variant="h1"
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          {/* <Button>Secondary button</Button> */}
          <Button className="button" variant="primary">
            Log Out
          </Button>
        </SpaceBetween>
      }
    >
      B.A.C.E
    </Header>
  );
}