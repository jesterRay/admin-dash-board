import React from 'react'

const NewAdmin = () => {
  return (
    <div id='new_admin_main'>
      <h1 id='new_admin_title'>Admins</h1>
        <div className='admin_container card'>
            <div className='admin_card'>
                <img src="https://media.istockphoto.com/id/1364523646/photo/portrait-of-young-handsome-asian-man-use-smartphone-selfie-say-hi-over-white-background-happy.jpg?s=612x612&w=0&k=20&c=0nQRzPi4cU3yWxFMUWHA2zD2E2-igTbBCo5cu0vSsug=" alt="error" />
                <h2 className='admin_name'>Yon Hunk</h2>
                <h4 className='login_status'>56 min ago</h4>
            </div>

            <div className='admin_card'>
                <img src="https://media.istockphoto.com/id/1334116149/photo/%C3%A0young-western-handsome-man-wearing-sunglasses-is-sitting-in-the-garden-with-a-green-leaf.jpg?s=612x612&w=0&k=20&c=5fBPNQqTP1-7ROJpdR9A4AEoun8W2MJi8oVZomV_tkA=" alt="error" />
                <h2 className='admin_name'>Alex Robert</h2>
                <h4 className='login_status'>3 hours ago</h4>
            </div>

            <div className='admin_card'>
                <img src="https://media.istockphoto.com/id/1323167284/photo/young-successful-indian-man-wearing-stylish-eyeglasses-standing-on-the-street-handsome-asian.jpg?s=612x612&w=0&k=20&c=gqsmYkDUEw5kQpuDvlFbkIGDy2-ISB6yK9zGe7rKlBI=" alt="error" />
                <h2 className='admin_name'>Ash Herwim</h2>
                <h4 className='login_status'>1 day ago</h4>
            </div>

            <div className='admin_card'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1URYyOaj_-1z6PlJlzuFRI2_YCLcA7kZzoA&usqp=CAU" alt="error" />
                <h2 className='admin_name'>More</h2>
                <h4 className='login_status'>New User</h4>
            </div>
        </div>

    </div>
  )
}

export default NewAdmin
