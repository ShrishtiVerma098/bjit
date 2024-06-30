import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            {/* <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p> */}
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Acceptance Time Frame ?</Accordion.Header>
                    <Accordion.Body>
                    03 to 12 months, depending upon the required revision cycles
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Paper Format ?</Accordion.Header>
                    <Accordion.Body>
                    No format, it can be submitted in single column. Papers, after acceptance, shall be typeset by Springer
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header> Submission Time ?</Accordion.Header>
                    <Accordion.Body>
                   	Papers can be submitted round the year 24x7x365. The paper shall be assigned to any specific volume and issue, only after its acceptance 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header> UGC Approval	 ?</Accordion.Header>
                    <Accordion.Body>
                     Yes, available in UGC-CARE List
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;