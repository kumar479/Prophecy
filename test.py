# Sample Python code for data transformation
def transform_data(input_data):
    # Perform some data transformation logic here
    transformed_data = []
    for item in input_data:
        new_property = item['old_property'] * 2
        item['new_property'] = new_property
        transformed_data.append(item)

    return transformed_data

# Sample data input
input_data = [
    { 'id': 1, 'old_property': 10 },
    { 'id': 2, 'old_property': 20 },
    { 'id': 3, 'old_property': 30 },
]

# Call the data transformation function
transformed_data = transform_data(input_data)

# Output the transformed data
print(transformed_data)
