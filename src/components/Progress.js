import React from 'react'

const Progress = () => {
  return (
    <div id='progress_card_main'>
      <h1 id='dash_title'>Analytics</h1>
      <div id='progress_card_container'>
        <div className='card progress_card'>
            <div className="progress_card_title">
                <h4>Total Sales</h4>
                <h2 id='totale_sales_value'>$65,024</h2>
            </div>
            <div className='progress'>
                <svg>
                    <circle cx="38" cy="38" r="35"></circle>
                </svg>
                <div id='percentage'>87%</div>
            </div>
        </div>

        <div className='card progress_card'>
            <div className="progress_card_title">
                <h4>Search</h4>
                <h2 id='totale_sales_value'>11,654</h2>
            </div>
            <div className='progress'>
                <svg>
                    <circle cx="38" cy="38" r="35" style={{stroke:'blue'}}></circle>
                </svg>
                <div id='percentage'>27%</div>
            </div>
        </div>

        <div className='card progress_card'>
            <div className='progress_card_title'>
                <h4>Site Visit</h4>
                <h2 id='totale_sales_value'>24,064</h2>
            </div>
            <div className='progress'>
                <svg>
                    <circle cx="38" cy="38" r="35" style={{stroke:'red'}}></circle>
                </svg>
                <div id='percentage'>52%</div>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default Progress
