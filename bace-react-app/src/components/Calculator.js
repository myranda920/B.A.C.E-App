import * as React from "react";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";
import Select from "@cloudscape-design/components/select";
import Checkbox from "@cloudscape-design/components/checkbox";
import Popover from "@cloudscape-design/components/popover";
import Box from "@cloudscape-design/components/box";


export default () => {
  const [drinkValue, setDrinkValue] = React.useState("");
  const [inputWeight, setInputWeight] = React.useState("");
  const [inputGender, setInputGender] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  
  const drinkCalc = drinkValue.value * 14 * 0.789;
  const weightCalc = inputWeight.value;
  // figure our gender calculation 
  
  // get a total on submit and change to bar graph page 

  return (
      <>
    <FormField
      description="2.. many"
      label="How many drinks have you had?"
    >
      <Input
        value={drinkValue}
        onChange={event =>
          setDrinkValue(event.detail.value)
        }
        placeholder="enter number"
      />
    </FormField>
    <FormField
      description="lbs"
      label="How much do you weigh?"
    >
      <Input
        value={inputWeight}
        onChange={event =>
          setInputWeight(event.detail.value)
        }
        placeholder="enter lbs"
      />
    </FormField>
    <FormField
      label="Gender?"
    >
      <Input
        value={inputGender}
        onChange={event =>
          setInputGender(event.detail.value)
        }
        placeholder="please type female or male"
      />
    </FormField>

    {/* Make gender a drop down (having trouble making it change to female or male once clicked) */}
    {/* <FormField
      label="Gender?"
    >
      <Select
        placeholder="gender"
        options={[
          { label: "Female", id: "1" },
          { label: "Male", id: "2" },
        ]}
      />
    </FormField> */}
    <Checkbox
      onChange={({ detail }) =>
        setChecked(detail.checked)
      }
      checked={checked}
    >
      I agree with the 
      <Box color="text-status-error">
      <Popover
        dismissAriaLabel="Close"
        header="Terms and Conditions"
        content="This is an ESTIMATOR and is not 100% accurate. It is just used to help give you a ROUGH estimate of your intoxication level to help avoid drinking and driving. Use with caution."
      >
          Terms and Conditions
      </Popover>
    </Box>
    </Checkbox>
    <Button variant="primary">Submit</Button>
    </>
  );
}