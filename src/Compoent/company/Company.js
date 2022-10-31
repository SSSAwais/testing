import React, { useState, useEffect } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Abs_CompList from "../../AbstractComponent/Abs_CompList/Abs_CompList";
import CompaniesForm from "../companies/CompaniesForm";
import "./Company/Company.css";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
import { LS_COMPANY_DATA, LS_NUMBEROF_LISTS } from "../../redux/consts";
import Pagination from "../../AbstractComponent/paginationtabs/Paginations";
const Company = () => {
  const [pageList,setPageList]=useState(LS_NUMBEROF_LISTS);
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [compDetail, setCompDetail] = useState(lsGetItem(LS_COMPANY_DATA));
  const [taskId,setTaskId]=useState('');
  const handleCompany = () => {
    const newComp = [
      ...compDetail,
      {
        id: compDetail.length + 1,
        date,
        name,
        detail,
      },
    ];
    setCompDetail(newComp);
    setName("");
    setDetail("");
    setDate("");
  };
  useEffect(() => {
   lsSetItem(LS_COMPANY_DATA,compDetail);
  }, [compDetail]);
 
  return (
    <>
      <section className="company-section">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 text-center mb-4">
              <Abs_Heading heading="Company" />
            </div>

            {/* tabs navs starts here */}
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
                  Add Company
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
                  View Comapny List
                </a>
              </li>
            </ul>
            {/* tabs navs ends here */}

            {/* tabs contents starts here */}
            <div className="tab-content" id="ex1-content">
              <div
                className="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
               <CompaniesForm updateCompany={(data)=>setCompDetail(data)}/>
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
                      <th scope="col">Date</th>
                      <th scope="col">Company Name</th>
                      <th scope="col">Discription</th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                    compDetail.map((e,idx)=>{
                      if(e.id==taskId){
                        return(
                          <tr className="companyListTable" data-aos="fade-up">
                            <td colSpan={6}>
                              <CompaniesForm 
                              updateCompany={(data)=>{setTaskId("")}}
                              />
                            </td>
                          </tr>
                        );
                      }else{
                        return(
                          <Abs_CompList
                          key={idx}
                          id={e.id}
                          date={e.date}
                          name={e.name}
                          detail={e.detail}
                          pressDlt={() => {
                            setCompDetail(
                              compDetail.filter((ele) => ele.id !== e.id)
                            );
                          }}
                          editPress={() => setTaskId(e.id)}
                        />
                        )
                      }
                    })
                   } 


                   
                  </tbody>
                </table>
                <Pagination/>
              </div>
            </div>

            {/* tabs cpontent ends here */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Company;
