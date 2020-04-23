import React from "react";
import { ScrollView } from "react-native";
import MybookDetail from "./MybookDetail";

const MybookList = () => {
  return (
    <ScrollView>
      <MybookDetail />
    </ScrollView>
  );
};

export default MybookList;