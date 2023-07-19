// Sample JavaScript code for data transformation
function transformData(inputData) {
    // Perform some data transformation logic here
    const transformedData = inputData.map((item) => ({
      ...item,
      newProperty: item.oldProperty * 2,
    }));
  
    return transformedData;
  }
  
  // Sample data input
  const inputData = [
    { id: 1, oldProperty: 10 },
    { id: 2, oldProperty: 20 },
    { id: 3, oldProperty: 30 },
  ];
  
  // Call the data transformation function
  const transformedData = transformData(inputData);
  
  // Output the transformed data
  console.log(transformedData);
  