import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, InputNumber, Select, Typography, DatePicker, Divider } from 'antd';
import 'antd/dist/antd.css';
import { DeleteOutlined, UploadOutlined} from '@ant-design/icons';
import UploadButton from './UploadButton'
const { Option } = Select;
const { Text } = Typography;



const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    //   const [editing, setEditing] = useState(false);
    //   const inputRef = useRef(null);
    const form = useContext(EditableContext);
    //   useEffect(() => {
    //     if (editing) {
    //       inputRef.current.focus();
    //     }
    //   }, [editing]);

    //   const toggleEdit = () => {
    //     setEditing(!editing);
    //     form.setFieldsValue({
    //       [dataIndex]: record[dataIndex],
    //     });
    //   };

    const save = async () => {
        try {
            const values = await form.validateFields();
            //   toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    //   if (editable) {
    //     childNode = editing ? (
    //       <Form.Item
    //         style={{
    //           margin: 0,
    //         }}
    //         name={dataIndex}
    //         rules={[
    //           {
    //             required: true,
    //             message: `${title} is required.`,
    //           },
    //         ]}
    //       >
    //         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
    //       </Form.Item>
    //     ) : (
    //       <div
    //         className="editable-cell-value-wrap"
    //         style={{
    //           paddingRight: 24,
    //         }}
    //         onClick={toggleEdit}
    //       >
    //         {children}
    //       </div>
    //     );
    //   }

    return <td {...restProps}>{childNode}</td>;
};

class Page5F extends React.Component {

    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'ItemName',
                dataIndex: 'name',
                width: '25%',
                editable: true,
            },
            {
                title: 'Description',
                dataIndex: 'description',
                width: '45%',
            },
            // {
            //     title: 'Amount',
            //     dataIndex: 'amount',
            // },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                width: '20%',
            },

            {
                title: 'Action',
                dataIndex: 'operation',
                align: 'right',
                width: '10%',

                render: (_, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a><DeleteOutlined style={{ fontSize: "23px" }} /></a>
                        </Popconfirm>
                    ) : null,
            },
        ];

       const hold=[];
        this.state = {
            dataSource: [
                // {
                //     key: '0',
                //     name: 'Edward King 0',
                //     description: 'London, Park La:ne no. 0',
                //     amount:'32',
                //     quantity:'32',
                // },
                // {
                //     key: '0',
                //     name: 'Edward King 0',
                //     description: 'London, Park La:ne no. 0',
                //     amount:'32',
                //     quantity:'32',
                // },
            ],
            count: 2,
            newObject: [],
            holder:[],
        };
    }
    onReset = () => {
        this.formRef.current.resetFields();
    
        
    };
    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
    };
    handleAdd = () => {
        const { count, dataSource } = this.state;

        if (this.state.newObject != 0) {
            const newData = {
                key: count,
                name: this.state.newObject[0].name,
                description: this.state.newObject[0].description,
                // amount: this.state.newObject[0].amount,
                quantity: this.state.newObject[0].quantity,
                //   Action:this.state.newObject[0].amount,
            };
            this.setState({
                dataSource: [...dataSource, newData],
                count: count + 1,
            });
        }
    };
    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData,
        });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });

        const { TextArea } = Input;
        const layout = {
            // labelCol: {
            //   span: 4,
            // },
            // wrapperCol: {
            //   span: 16,
            // },
        };

        const onFinish = (values) => {
            console.log('Success:', values);
            // setFormData(values)
            const array = []
            const key = {}

            array.push(values)
            // hold.push(values)
            this.setState({
                newObject: (array),
               
            })
            this.setState({
                holder:(prevState=> prevState.push(values)),
            })
            this.handleAdd();
            this.onReset();
            console.log('Success:', this.state.holder.length);
            // prop.handleHold(values)
            // formData = values
           

        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        return (



            <div style={{marginLeft:"10px"}}>
                <div style={{ padding: "15px", backgroundColor: "#D5FFD5",  color: "#43425D" }}>Requisition Memo</div>
  
                               
                                <div>
                                    <div className="">
                                        <Form
                                        style={{padding:"10px", backgroundColor:"white"}}
                                        className="flex-between"
                                            layout="vertical">
                                            <Form.Item
                                               style={{width:"70%",}}
                                             label="Subject"
                                             name="subject"
                                             rules={[
                                                 {
                                                     required: true,
                                                     message: 'Please input Subject!',
                                                 },
                                             ]} >
                                            <Input  style={{border:"none", borderBottom: "1px solid", borderColor: "#D6D6D6" }}/>
                                            </Form.Item>
    
                                            <Form.Item
                                            style={{width:"30%", marginLeft:"20px", }}
                                             label="Expected date"
                                             name="date"
                                             rules={[
                                                 {
                                                     required: true,
                                                     message: 'Please input date!',
                                                 },
                                             ]} >
                                            <DatePicker  style={{width:"100%",border:"none",borderBottom: "1px solid", borderColor: "#D6D6D6" }}/>
                                            </Form.Item>
                                        </Form>
                                     
                                    </div>

                    <TextArea rows={8} placeholder="Repair Details/Report" style={{ width: "100%", border:"none" }} />
                                </div>

                <div style={{ padding: "15px", textAlign: "left", backgroundColor: "#EFEFEF",  color: "#43425D", }}>Add Items Required</div>

                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", backgroundColor:"white" }}>
                    <div style={{ width: "33%", padding: "15px" }}>

                        <Form

                            ref={this.formRef}
                            layout="vertical"
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Item Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Item Name!',
                                    },
                                ]}
                            >
                                <Select
                                    bordered={false}
                                    showSearch

                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    <Option value="1">Not Identified</Option>
                                    <Option value="2">Closed</Option>
                                    <Option value="3">Communicated</Option>
                                    <Option value="4">Identified</Option>
                                    <Option value="5">Resolved</Option>
                                    <Option value="6">Cancelled</Option>
                                </Select>
                                {/* <Input style={{ border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} /> */}
                            </Form.Item>

                            <Form.Item

                                label="Description"
                                name="description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input Description!',
                                    },
                                ]}
                            >
                                <TextArea rows={2} style={{ border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} />
                                
                            </Form.Item>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                {/* <Form.Item
                                    style={{ width: "100%" }}
                                    label="Amount"
                                    name="amount"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Amount!',
                                        },
                                    ]}
                                >
                                    <InputNumber style={{ width: "100%", border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} />
                                </Form.Item> */}

                                <Form.Item
                                    style={{ width: "100%" }}
                                    label="Quantity"
                                    name="quantity"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input quantity!',
                                        },
                                    ]}
                                >
                                    <InputNumber style={{ width: "100%", border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} />
                                </Form.Item>
                            </div>


                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Form.Item style={{ width: "100%" }}>
                                    <Button block htmlType="submit" style={{ backgroundColor: "ash", borderColor: "ash", color: "whblackite", width: "95%" }} >
                                       <b>Add Records</b>
              	          </Button>
                                </Form.Item>

                                <Form.Item style={{ width: "50%" }}>
                                    <UploadButton p = "Upload Documents"/>
                                </Form.Item>
                            </div>
                           
                        </Form>
                    </div>


                    <div style={{ width: "100%", }}>

                        <Table
style={{width:"100%",marginLeft:"20px",}}

                            onRow={(record, rowIndex) => {
                                return {
                                    onClick: event => {
                                        this.setState({
                                            rowValues: (record),
                                        })
                                    },
                                };
                            }}


                            total={this.state.dataSource.length}
                            components={components}
                            rowClassName={() => 'editable-row'}
                            bordered
                            dataSource={dataSource}
                            columns={columns}
                            pagination={{
                                showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} items`,
                                // showQuickJumper:true,
                                // showSizeChanger:true
                            }}
                            // summary={pageData => {
                            //     let totalAmount = 0;


                            //     pageData.forEach(({ amount }) => {
                            //         totalAmount += amount;

                            //     });

                            //     return (
                            //         <>
                            //             <Table.Summary.Row style={{ backgroundColor: "#EFEFEF", fontWeight: "bold" }}>
                            //                 <Table.Summary.Cell>Total</Table.Summary.Cell>
                            //                 <Table.Summary.Cell>
                            //                     <Text type="danger" >{}</Text>
                            //                 </Table.Summary.Cell>
                            //                 <Table.Summary.Cell>
                            //                     <Text>{totalAmount}</Text>
                            //                 </Table.Summary.Cell>
                            //                 <Table.Summary.Cell>
                            //                     <Text type="danger" >{}</Text>
                            //                 </Table.Summary.Cell>
                            //                 <Table.Summary.Cell>
                            //                     <Text type="danger" >{}</Text>
                            //                 </Table.Summary.Cell>
                            //             </Table.Summary.Row>

                            //         </>
                            //     );
                            // }}

                        />
                        


                    </div>
                    
                </div>
                <div className="flex" style={{width:"100%",}}>
                                <Button block style={{width:"100%", color:"white", backgroundColor:"#43425D"}}>Save Request</Button>
                                <Button block style={{marginLeft:"10px", color:"white", backgroundColor:"#1C811C"}}>Submit Request</Button>
                            </div>
            </div>

        );
    }
} export default Page5F