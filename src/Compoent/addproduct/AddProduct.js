import React, { Component, useEffect, useState } from "react";
import "./AddProduct.css";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import {
  PERCENTAGE,
  FIXED,
  COMPANY,
  GREESE,
  LUBRICANTS,
  ATF,
  GEAROIL,
  LS_PRODUCT_DATA,
  LS_NUMBEROF_LISTS,
} from "../../../src/redux/consts";
import Abs_Productlist from "../../AbstractComponent/Abs_Productlist/Abs_Productlist";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
import ProductForm from "../product/productForm";
import Pagination from "../../AbstractComponent/paginationtabs/Paginations";


const AddProduct = () => {
  const [pageList,setPageList]=useState(LS_NUMBEROF_LISTS);
  const [ProductName, setProductName] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [getpercent, setGetPercent] = useState(false);
  const [discountType, setDiscountType] = useState(PERCENTAGE);
  const [company, setCompany] = useState("");
  const [itemCategory, setItemCategory] = useState(GREESE);
  const [fixedValue, setFixedValue] = useState();
  const [productData, setProductData] = useState(lsGetItem(LS_PRODUCT_DATA));
  const [carton, setCarton] = useState();
  const [cat, setCat] = useState(false);

  const [editingId, setEditingId] = useState("");

  // const _handleSaveProduct = (e) => {
  //   const kixxs = [
  //     ...productData,
  //     {
  //       id: productData.length + 1,
  //       ProductName,
  //       itemCategory,
  //       cost,
  //       price,
  //       qty,
  //       carton,
  //       fixedValue,
  //       company,
  //     },
  //   ];

  //   setProductData(kixxs);
  //   setProductName("");
  //   setItemCategory("");
  //   setCost("");
  //   setPrice("");
  //   setQty("");
  //   setCarton("");
  //   setCompany("");
  //   setFixedValue("");
  //   // console.log(company,"<==")
  // };

  useEffect(() => {
    lsSetItem(LS_PRODUCT_DATA, productData);
  }, [productData]);

  const handleDisbale = (type) => {
    setGetPercent(!getpercent);
    setDiscountType(type);
  };

  const Category = (e) => {
    setCat(!cat);
    setItemCategory(e);
  };

  const handleCompany = () => {};

  return (
    <>
      <section className="addproductsection">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 head text-center">
              <Abs_Heading heading="Product Info" />
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
                Add product
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
                Product list
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
              <ProductForm updateData={(data) => setProductData(data)} />
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
                    <th scope="col">product</th>
                    <th scope="col">Category</th>
                    <th scope="col">Unir Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Carton Price</th>
                    <th scope="col">Discount price</th>
                    <th scope="col">Company</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((e, idx) => {
                    if (e.id == editingId) {
                      return (
                        <tr className="productlisttable" data-aos="fade-up">
                          <td colSpan={10}>
                            <ProductForm
                              updateData={(data) => {
                                console.log("update data");

                                setEditingId("");
                              }}
                            />
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <Abs_Productlist
                          id={e.id}
                          key={idx}
                          ProductName={e.ProductName}
                          itemCategory={e.itemCategory}
                          price={e.price}
                          qty={e.qty}
                          carton={e.carton}
                          fixedValue={e.fixedValue}
                          company={e.company}
                          pressDlt={() => {
                            setProductData(
                              productData.filter((ele) => ele.id !== e.id)
                            );
                          }}
                          editPress={() => setEditingId(e.id)}
                        />
                        );
                      
                        
                    }
                  })}
                </tbody>
              </table>
              <Pagination/>
            </div>
          </div>
      
          {/* <!-- Tabs content --> */}
        </div>
      </section>
    </>
  );
};
export default AddProduct;
