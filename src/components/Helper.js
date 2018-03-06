const helper = {
  handleFocus: function(e) {
    console.log("hello focus");
    console.log(e.target.value, e.target.defaultValue);
    if (e.target.value===e.target.defaultValue) {
      e.target.value="";
    }
  },
  handleBlur: function(e) {
    console.log("blurring");
    console.log(e.target.value, e.target.defaultValue);
    if (e.target.value==="") {
      e.target.value=e.target.defaultValue;
    }
  }
}
export default helper;
