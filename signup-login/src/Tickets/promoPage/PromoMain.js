import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import CreatePromoForm from "./CreatePromoForm";
import UploadCsvForm from "./UploadCsvForm";
import PromoPageCard from "./PromoPageCard";
import Icon from '../files/Image.png'

/** Renders the main component for managing promo codes, including the ability to create and upload promo codes
@param {Object} Promo - A Promo object containing properties for each promo code
@param {Array} finalData - An array of data containing promo code information
@returns {JSX.Element} - Returns the main component as a JSX element
*/
function PromoMain({Promo, finalData}){

  /**Scrolls to the top of the window on page load*/
  useEffect(() => {window.scrollTo(0,0)}, [])

    /** State to manage whether or not to show the create promo code form
@type {[Boolean, Function]}
*/
    const [createPromo, setCreatePromo] = useState(false);
    /**State to manage whether or not to show the upload CSV form
@type {[Boolean, Function]}
*/
    const [uploadCsv, setUploadCsv] = useState(false);
    /** State to manage the selected promo code
@type {[Object, Function]}
*/
    const [selectedItem, setSelectedItem] = useState(null);
    /** State to manage all promo codes
@type {[Array, Function]}
*/
    const [promoCodes, setPromoCodes] = useState(finalData ? finalData : []);
    /** State to manage the search query for filtering promo codes
@type {[String, Function]}
*/
    const [searchQuery, setSearchQuery] = useState("");
    /** State to manage filtered promo codes based on the search query
@type {[Array, Function]}
*/
    const [filtered, setFiltered] = useState(promoCodes)
    /** Filters promo codes based on the search query
@type {Array}
*/
    const filteredPromoCodes = promoCodes.filter(
      (item) =>
        item.codeName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // setFiltered(filteredPromoCodes);
    // else setFiltered(promoCodes) 
    // console.log(promoCodes);
    // console.log(selectedItem);
    Promo(promoCodes);


    return(
        <div>

          {
            promoCodes.length > 0 ?
          

<React.Fragment>

  <div style={{width: '100%',minWidth: '30rem', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', marginBottom: '1rem'}}>



  <div className="inputContainer" >
        <label className="inputLabel">Search</label>
        <input
          id="promo-main-search"
          style={{ fontSize: "0.85rem" }}
          type="text"
          maxLength="50"
          name="eventName"
          value={searchQuery}
          onChange={(e) => {setSearchQuery(e.target.value)}} 
          required
          placeholder="Enter Name."
        />
      </div>
  {/* <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value); console.log(e.target.value)}} /> */}
  

<div style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: 'center'
        }}>
<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '10rem', marginRight: '2rem'}}>
    <div  onClick={() => {setUploadCsv(true); setCreatePromo(false)}} style={{height: '3rem', width: '100%', backgroundColor: 'white', border: '2px solid #ccc', color: '#555555', borderRadius: '5px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>Upload Csv</div>
    {/* <button type="submit" style={{height: '3rem', width: '45%'}} >Next</button> */}
    </div>

<div
        className="mainButton"
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          id="promo-main-add-code"
          onClick={() => {setCreatePromo(true); setUploadCsv(false)}}
        >
          Add a code
        </button>
      </div>

      </div>

      </div>


          <div style={{flexDirection: 'row', display: 'flex', backgroundColor: '#ccc', paddingLeft: '1rem', fontSize: 'small'}}>
          <div style={{width: '95%', flexDirection: 'row', display: 'flex'}}>
            <div style={{width: '30%', marginRight: '20%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
              <p >Name</p>
              <p>Code Type</p>
            </div>

            <div  style={{width: '30%', flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
              <p>Discount</p>
              <p>Uses</p>
              <p>Status</p>
              </div>
            </div>
          </div>

{filteredPromoCodes.map((item, index) => (
          <div style={{display: 'flex', flexDirection: 'row', width: '100%'}} key={item.id}>
  <PromoPageCard
    data={item}
    key={item.id}
    index={index}
    onClick={() => {
      
      setSelectedItem(item);
      if (item.type === 'UploadCsv'){
        setUploadCsv(true)
      
    }
    else setCreatePromo(true);
    }}
    // onDuplicate={(newData) => {
    //   setCreatePromo(true);
    //   setSelectedItem(newData);
    // }}

    onDelete={(id) => {
      setPromoCodes((prevData) => {
        const updatedData = prevData.filter(item => item.id !== id);
        return updatedData;
      });
    }}
    
  />

</div>
))}

</React.Fragment>

:

<React.Fragment>
  <div style={{padding: '1rem', minWidth: '30rem'}}>

  <p>To create promo codes that apply across multiple events, visit Marketing.</p>
  <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}>

    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '0rem', fontSize: 'x-large'}}>
    <h2>
    Attract more attendees with promo codes
    </h2>
</div>
<p style={{display: 'flex', flexDirection: 'row', width: '80%', alignItems: 'center', marginBottom: '1rem'}}>
With promo codes, you can offer reduced prices with discount codes or reveal hidden tickets to attendees with access codes.
<br/><br/>
You can create codes or upload a CSV to import ones you’ve already made.
</p>
</div>



<div style={{width: '100%'}}>
<img src={Icon} style={{marginTop: '2rem'}} alt="Image" />
    {/* <Icon /> */}
</div>



</div>



<div
        className="mainButton"
        style={{
          flexDirection: "row",
          display: "flex",
          // justifyContent: "flex-end",
          marginTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <button
        id="promo-main-add-promo-code"
           onClick={() => {setCreatePromo(true); setUploadCsv(false)}}
        >
          Create Promo Code
        </button>



        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '10rem', marginLeft: '2rem'}}>
    <div id="promo-main-upload-csv" onClick={() => {setUploadCsv(true); setCreatePromo(false)}} style={{height: '3rem', width: '100%', backgroundColor: 'white', border: '2px solid #ccc', color: '#555555', borderRadius: '5px', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>Upload Csv</div>
    {/* <button type="submit" style={{height: '3rem', width: '45%'}} >Next</button> */}
    </div>


      </div>

{/* <button onClick={() => {setCreatePromo(true); setUploadCsv(false)}}>
                Create Promo Code
            </button> */}

            {/* <button onClick={() => {setUploadCsv(true); setCreatePromo(false)}}>
                Upload Csv
            </button> */}
            </div>
</React.Fragment>



}

            


            <FormContainer  isClosed={createPromo} open={createPromo}>
          {createPromo && 
          <CreatePromoForm   onCancel={() => {
            setCreatePromo(false);
          }} 

          myData={selectedItem ? selectedItem : null}
          
          onSubmit={(newData) => {
            setPromoCodes((prevData) => {
              const updatedData = prevData.map(item => {
                if (item.id === newData.id) {
                  return newData;
                } else {
                  return item;
                }
              });
          
              if (!prevData.some(item => item.id === newData.id)) {
                updatedData.push(newData);
              }
          
              return updatedData;
            });
          }}
          />
        }
        </FormContainer>


        <FormContainer  isClosed={uploadCsv} open={uploadCsv}>
          {uploadCsv && 
          <UploadCsvForm 
          myData={selectedItem ? selectedItem : null}
          
          onSubmit={(newData) => {
            setPromoCodes((prevData) => {
              const updatedData = prevData.map(item => {
                if (item.id === newData.id) {
                  return newData;
                } else {
                  return item;
                }
              });
          
              if (!prevData.some(item => item.id === newData.id)) {
                updatedData.push(newData);
              }
          
              return updatedData;
            });
          }}
           onCancel={() => {
            setUploadCsv(false);
          }} />
        }
        </FormContainer>


        </div>
    )

};

export default PromoMain;