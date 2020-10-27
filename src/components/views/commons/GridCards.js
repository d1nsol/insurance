import React from 'react'
import { Card, Col } from 'antd'

function GridCards(props) {
    return (
        // 한 행에 최대 24개
        <Col lg={6} md={8} xs={24}>
            {/* <Card title={props.goodClsf} extra={<a ref="#">More</a>} style={{width: 300}} bordered={false}>
                <p>{props.goodAbnm}</p>
            </Card> */}
            {
                !!props.goodClsf &&
                <div style={{position: 'relative', margin: '5px'}}>
                    <div>
                        <a href={`/insurance/${props.goodAbnm}`}>
                            <Card title={props.goodClsf} bordered={true}>
                                <p>{props.goodAbnm}</p>
                            </Card>
                        </a>
                    </div>
                </div>
            }
        </Col>
    )
}

export default GridCards
