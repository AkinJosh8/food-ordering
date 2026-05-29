import "../components/Account.css"
import { useState, useEffect} from "react"

function Account() {
  const [avatar, setAvatar] = useState(null);

  //function to handle avatar change
  const handleAvatarChange = (e) => {
    //get the selected file
    const file = e.target.files[0]

      //if there is a file, create a new FileReader and read the file as a data URL
    if (file) {
      const reader = new FileReader()

      //when the file is loaded, set the avatar state to the result
      reader.onloadend = () => {
        setAvatar(reader.result)
      }

      //read the file as a data URL
      reader.readAsDataURL(file)
    }
  }
  
  
  const defaultUser = {
    name: "Chukks",
    email: "chukks@example.com",
    phone: "+234 811 286 1088",
    addresses: {
      home: "03 Forman street, Lagos, Nigeria",
      work: "12 Ogba, Lagos",
      other: "Add another address"
    }
  }

  const [user, setUser] = useState(defaultUser)

  const [selectedAddress, setSelectedAddress] = useState("home")

  //keep track of whether the user is editing their profile or not
  const [isEditing, setIsEditing] = useState(false)

  //the form data in profile edit form, gets synced with the user data
  const [formData, setFormData] = useState(defaultUser)

  //this one handle input changes, updates the form data state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // for save button click
  const handleSave = () => {
    setUser(formData)
    localStorage.setItem("userProfile", JSON.stringify(formData))
    
    setIsEditing(false)
  }

  const orders = [
    { id: 1, item: "Jollof Rice Combo", price: 8500, status: "Delivered" },
    { id: 2, item: "Chicken Shawarma", price: 4500, status: "On the way" }
  ]

  useEffect(() => {
  // Load avatar
  const savedAvatar = localStorage.getItem("avatar")
  if (savedAvatar) setAvatar(savedAvatar)
  

  // Load saved profile
  const savedUser = localStorage.getItem("userProfile")
  if (savedUser) {
    const parsed = JSON.parse(savedUser)

     const mergedUser = {
      ...defaultUser,
      ...parsed,
      addresses: {
        ...defaultUser.addresses,
        ...(parsed.addresses || {})
      }
    }
    
    
    setUser(mergedUser)
    setFormData(mergedUser)
  }
  }, [])

  //to save avatar to local storage whenever cahnages is made 
  useEffect(() => {
    if (avatar) {
      localStorage.setItem("avatar", avatar)
    } else {
      localStorage.removeItem("avatar")
    }
  }, [avatar])


  return (
  <> 
    <div className="account-page">
      <h1>Account Page</h1>

    <div className="profile-card">
      <div className="profile-top">
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Delivery Address:</strong>{" "} {user.addresses[selectedAddress] || "No address set"}</p>
          <select className="address-select" value={selectedAddress} onChange={(e) => 
            setSelectedAddress(e.target.value)
          }
          >
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
          <button onClick={() => setIsEditing(true)}> Edit Profile </button>
        </div>
      <div className="avatar-section">
        <img src={avatar ? avatar : "https://i.ibb.co/4pDNDk1/avatar-placeholder.png"}
        className="avatar" alt="User Avatar" />

      <label className="upload-btn"> Change Avatar
        <input type="file" accept="image/*" hidden onChange={handleAvatarChange} />
      </label>
      </div>
      </div>
    </div>

    <div className="account-card">
      <h2>Order History</h2>
        {orders.map(order => (
        <div key={order.id} className="order-item">
          <span>{order.item}</span>
          <span>Price: &#8358; {order.price.toLocaleString()}</span>
          <span>Status: {order.status}</span>
        </div>
      ))}
    </div>

      <div className="account-card">
        <h2>Payment Methods</h2>
        <p>Visa ending in 1234</p>
        <button>Add card</button>
      </div>

      <div className="account-card settings-card">
        <button>Notifications</button>
        <button>Help Center</button>
        <button className="logout-btn">Logout</button>

      </div>
    </div>

    {isEditing && (
    <div className="modal-overlay">
      <div className="edit-modal">
          <h2>Edit Profile</h2>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
         
          <input name="home" value={formData.addresses?.home || ""} 
            onChange={ (e) => setFormData({...formData, addresses: {...formData.addresses, home: e.target.value
          }}) } placeholder="Home Address" />
          
          <input name="work" value={formData.addresses?.work || "" } 
            onChange={ (e) => setFormData({...formData, addresses: {...formData.addresses, work: e.target.value
          }}) } placeholder="Work Address" />
          
          <input name="other" value={formData.addresses?.other || ""} 
            onChange={ (e) => setFormData({...formData, addresses: {...formData.addresses, other: e.target.value
          }}) } placeholder="Other Address" 
          />

        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )}
  </>
) 
}

export default Account;