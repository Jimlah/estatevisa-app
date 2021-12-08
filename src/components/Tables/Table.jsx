import React from 'react';
import Col from './Col';
import Row from './Row';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Table({ title, head, data, column, paginate }) {
    return (
        <div className="bg-white border border-gray-200 rounded-sm shadow-lg col-span-full xl:col-span-8">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">{title}</h2>
            </header>
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        {/* Table header */}
                        <thead className="text-xs text-gray-400 uppercase rounded-sm bg-gray-50">
                            <Row className="">
                                {head?.map((item, index) => (
                                    <Col key={index} head={true}>{item}</Col>
                                ))}
                                {!head && (
                                    <Col head>
                                        No Heading Available
                                    </Col>
                                )}
                            </Row>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-gray-100">
                            {/* Row */}
                            {data?.map((item, index) => (
                                <Row key={index}>
                                    {column?.map((col, i) => (
                                        <Col key={i}>{item[col]}</Col>
                                    ))}
                                </Row>
                            ))}
                            {!data && (
                                <Row>
                                    <Col>
                                        No Data Available
                                    </Col>
                                </Row>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {
                paginate && (
                    <div className="flex items-center justify-start p-3 space-x-2">
                        <button className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
                            <AiOutlineLeft className="w-6 h-6 text-gray-900" />
                        </button>
                        <span>
                            1
                        </span>
                        <button className="p-1 bg-gray-200 rounded-full hover:bg-gray-300">
                            <AiOutlineRight className="w-6 h-6 text-gray-900" />
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default Table;