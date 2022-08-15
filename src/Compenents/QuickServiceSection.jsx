import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function QuickServiceSection({ title = "", subTitle = "", QuickServices = [] }) {
    const QuickServiceSize = QuickServices.length > 0 ? 24 / QuickServices.length : 12;
    const navigate = useNavigate();

    return (
        <section className="section">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title mb-3">{title}</h4>
                            <p className="text-muted para-desc mx-auto mb-0">
                                {subTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {QuickServices.map((Service, index) => {
                        return (<div className={" mt-4 mb-4 col-lg- col-md-" + QuickServiceSize}>
                            <div className="features feature-primary border-0 d-flex">
                                <div className="fea-icon rounded-circle bg-light shadow icon">
                                    <i className={"las la-2x " + Service.icon}></i>
                                </div>

                                <div className="content flex-1 ms-3">
                                    <Link
                                        to={Service.linkTo}
                                        className="title h5 text-dark"
                                    >
                                        {Service.title}
                                    </Link>
                                    <p className="text-muted mt-2 mb-0">
                                        {Service.description}
                                    </p>
                                </div>
                            </div>
                        </div>)
                    })}

                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mt-5">
                        VIEW ALL SERVICE
                        <i className="uil uil-arrow-right align-middle ps-2" />
                    </button>
                </div>
            </div>
        </section>
    )
}
