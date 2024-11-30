import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import registerStyle from "../../style/registerStyle";

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
  return (
    <TouchableOpacity style={registerStyle.submitBtn} onPress={handleSubmit}>
      <Text style={registerStyle.btnText}>
        {loading ? "Please Wait..." : btnTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
