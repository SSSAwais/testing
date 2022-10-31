import React, { Component, useEffect, useState } from "react";
import "./PriceList.css";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_PriceList from "../../AbstractComponent/Abs_PriceList/Abs_PriceList";
import Pagination from "../../AbstractComponent/paginationtabs/Paginations";
import { LS_NUMBEROF_LISTS, LS_PRODUCT_DATA } from "../../redux/consts";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
import Abs_Productlist from "../../AbstractComponent/Abs_Productlist/Abs_Productlist";
const PriceList = () => {
  const [pageList,setPageList]=useState(LS_NUMBEROF_LISTS);
  const [firstList,setFirstList]=useState(lsGetItem(LS_PRODUCT_DATA))
  const [list, setList] = useState([
    {
      id: "1",
      name: "HYBRID ",
      disp: "Fully Synthatic",
      varient: "Api Sp",
      grade: "0W-16",
      pack: "1-liter",
      liter_Kg: "2070",
      rateprice: "2070",
      rate_ctn: "24840",
    },
  ]);
  const [hell,setHell]=useState([]);
  const [rowSpan,setRowSpan]=useState([]);

  function hellowolrd(){
    const categories = ['GREESE','LUBRICANTS','ATF','GEAROIL'];
    const alldata = [];
    const rowspan = [];
    for(var i = 0; i < categories.length; i++ ){
      const category = categories[i];
        var rows = 0;
      const matchingrasulr = firstList.map(function(val,index){
        // console.log(index);
        const dbcategory = val.itemCategory;
        if( dbcategory.match(category) ){
         rows =  rows + 1;
          alldata.push(val);
        }
      });//map function end here
      if( rows > 0 ) rowspan[category] = rows ;
      
    }
// return alldata;
// console.log(rowspan);
    setHell([...alldata]);
    setRowSpan(rowspan);

  }



  useEffect(() => {
    hellowolrd();
    lsSetItem(LS_PRODUCT_DATA, firstList);
  }, [firstList]);
  const [ref, setRef] = useState("1");
  return (
    <>
      <section className="pircesection">
        {/* price list heading section starts here */}
        <div className="first-pricelist-section">
          <div className="container">
            <div className="row heading-row sales-section justify-content-center">
              <div className="col-lg-12 text-center ">
                <Abs_Heading heading="Price List" />
                {/* <p> REF # {ref}</p> */}
              </div>
            </div>
            {/* <!-- Tabs navs --> */}
            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="ex1-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-1"
                  role="tab"
                  aria-controls="ex1-tabs-1"
                  aria-selected="true"
                >
                  NEW
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-2"
                  role="tab"
                  aria-controls="ex1-tabs-2"
                  aria-selected="false"
                >
                  CURRENT REF # 1
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-3"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-3"
                  role="tab"
                  aria-controls="ex1-tabs-3"
                  aria-selected="false"
                >
                  OLD LISTS
                </a>
              </li>
            </ul>
            {/* <!-- Tabs navs --> */}

            {/* <!-- Tabs content --> */}
            <div className="tab-content" id="ex1-content">
              <div
                className="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                     <table className="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Pack</th>
                      <th scope="col">Rate LTR/KG Rs</th>
                      <th scope="col">Rate Price (Rs.)</th>
                      <th scope="col">Rate/ Ctn (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* price list renders here */}

                    {
                      hell.map((e,idx)=>
                      <Abs_Productlist
                      rowspan={ rowSpan[e.itemCategory] }
                      rowid = { idx }
                      id={e.id}
                      key={idx}
                      ProductName={e.ProductName}
                      itemCategory={e.itemCategory}
                      price={e.price}
                      qty={e.qty}
                      carton={e.carton}
                      fixedValue={e.fixedValue}
                      company={e.company}
                    />

                      )
                      
                      
                    }
                    {/* price list rendering ends here */}


                   
                  </tbody>
                </table>
                <Pagination/>
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                    <table className="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Pack</th>
                      <th scope="col">Rate LTR/KG Rs</th>
                      <th scope="col">Rate Price (Rs.)</th>
                      <th scope="col">Rate/ Ctn (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    }
                    {list.map((e, idx) => (
                      <Abs_PriceList
                        key={idx}
                        id={e.id}
                        name={e.name}
                        disp={e.disp}
                        varient={e.varient}
                        grade={e.grade}
                        pack={e.pack}
                        liter_Kg={e.liter_Kg}
                        rateprice={e.rateprice}
                        rate_ctn={e.rate_ctn}
                      />
                    ))}
                    {/* price list rendering ends here */}


                   
                  </tbody>
                </table>
                <Pagination/>
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-3"
                role="tabpanel"
                aria-labelledby="ex1-tab-3"
              >
                   <table className="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Pack</th>
                      <th scope="col">Rate LTR/KG Rs</th>
                      <th scope="col">Rate Price (Rs.)</th>
                      <th scope="col">Rate/ Ctn (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* price list renders here */}
                    {list.map((e, idx) => (
                      <Abs_PriceList
                        key={idx}
                        id={e.id}
                        name={e.name}
                        disp={e.disp}
                        varient={e.varient}
                        grade={e.grade}
                        pack={e.pack}
                        liter_Kg={e.liter_Kg}
                        rateprice={e.rateprice}
                        rate_ctn={e.rate_ctn}
                      />
                    ))}
                    {/* price list rendering ends here */}


                   
                  </tbody>
                </table>
                <Pagination/>
              </div>
            </div>
            {/* <!-- Tabs content --> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default PriceList;
