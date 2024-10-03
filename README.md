# Council Rubbish Dates API

Currenlty this API provides access to only rubbish collection dates for Auckland and Christchurch Council only .

## Supported Endpoint

| Name                 | Endpoint                                    | Parameters  | Comments                                                                                                                                                                                                                                                                                         |
| :------------------- | :------------------------------------------ | :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auckland Council     | `api/auckland-council-dates/:addressId`     | `addressId` | The `addressId` corresponds to your specific address and can be found at the end of the URL when you search for your address on the [Auckland Council Website](https://www.aucklandcouncil.govt.nz/rubbish-recycling/rubbish-recycling-collections/Pages/rubbish-recycling-collection-days.aspx) |
| Christchurch Council | `api/christchurch-council-dates/:addressId` | `addressId` | The `addressId` corresponds to your specific address and can be found at the network tab, when you search for your address on the [Council Website](https://ccc.govt.nz/services/rubbish-and-recycling/collections)                                                   |
Hamilton Council | `api/hamilton-council-dates?address_string= street address` | `address_string` | The `address_string` corresponds to street address with house number and can be found at the network tab, when you search for your address on the [Council Website](https://www.fightthelandfill.co.nz/)  |
