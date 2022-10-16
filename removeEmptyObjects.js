const myObj = {
  "component_details": {
    "component_id": "45f7ce2a-1ec3-4c8d-8508-9dc33a21a32d",
    "component_name": "Accumulator",
    "attributes": [
      {
        "AttributeID": "5e614f03-c3df-4470-b330-f61b6aad0f8a",
        "AttributeName": "Accumulator Connection",
        "Required": true,
        "AttributeValues": [
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
            "AttributeValueName": "1 5/8\"",
            "AttributeValueId": "771f01f4-225b-40eb-888f-60a37e534165",
            "status": "active"
          },
          {
            "AttributeValueName": "1/2\"",
            "AttributeValueId": "a6249f72-c0c7-4755-9f3a-43b4d05afb86",
            "status": "active"
          },
          {
            "AttributeValueName": "5/8\"",
            "AttributeValueId": "0e640c7e-647e-4c47-8953-92fc088fc4b4",
            "status": "active"
          },
          {
            "AttributeValueName": "1 1/5\"",
            "AttributeValueId": "75f692ec-c20e-41be-9ba3-ddb3985cf147",
            "status": "active"
          },
          {
            "AttributeValueName": "3/4\"",
            "AttributeValueId": "6adc6ed3-e75a-4087-b6cc-8ecea7cd7528",
            "status": "active"
          },
          {
            "AttributeValueName": "1 3/8\"",
            "AttributeValueId": "c34f7b55-b06a-451c-84fe-ea5f4eabdb38",
            "status": "active"
          },
          {
            "AttributeValueName": "1 1/8\"",
            "AttributeValueId": "60402fa3-d0e6-4a9e-a06a-ad3b06f2f5d5",
            "status": "active"
          },
          {
            "AttributeValueName": "7/8\"",
            "AttributeValueId": "6dd2a6b8-dcf6-40e5-9ed6-35cc4dfb0fa3",
            "status": "active"
          }
        ],
        "displayOrder": 1,
        "status": "active"
      },
      {
        "AttributeID": "06898659-baac-41bd-ab41-bc5f3e4ba9dd",
        "AttributeName": "Diameter",
        "Required": true,
        "AttributeValues": [
          {
          },
          {
          },
          {
          },
          {
          },
          {
            "AttributeValueName": "14\"",
            "AttributeValueId": "7c38e236-4624-4dec-ac33-4fbe6f43085e",
            "status": "active"
          },
          {
            "AttributeValueName": "20\"",
            "AttributeValueId": "f5a2d0e9-5304-4e58-b587-3a9ded4a7944",
            "status": "active"
          },
          {
            "AttributeValueName": "27 1/2\"",
            "AttributeValueId": "020ac753-d7b8-4395-ae37-24f15ed90254",
            "status": "active"
          },
          {
            "AttributeValueName": "22\"",
            "AttributeValueId": "7fd21fa6-eaf7-46ba-899b-43f88242c159",
            "status": "active"
          }
        ],
        "displayOrder": 38,
        "status": "active"
      },
      {
        "AttributeID": "a6f9fd4f-ed2e-4597-8830-15d5243a3884",
        "AttributeName": "Additional Attributes",
        "Required": true,
        "AttributeValues": [
          {
          },
          {
            "AttributeValueName": "Other/Unknown",
            "AttributeValueId": "0c971d6c-a358-41af-8da4-e5f8deab5ff9",
            "status": "active"
          }
        ],
        "displayOrder": 98,
        "status": "active"
      }
    ],
    "type": "repair",
    "status": "active"
  }
};

 

  const removeEmptyOrNull = (obj) => {

    Object.keys(obj).forEach(k =>

      (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||

      (!obj[k] && obj[k] !== undefined) && delete obj[k]

    );

    return obj;

  };

 

  myObj2 = removeEmptyOrNull(myObj);
  console.log(myObj2);
