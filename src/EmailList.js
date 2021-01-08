import  {useEffect,useState} from "react";
import React from 'react'
import  "./EmailList.css";
import { Checkbox , IconButton} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import Section from "./Section";
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import {db} from "./firebase";





function EmailList() {
  const [emails,setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails')
    .orderBy('timestamp', 'desc')
    .onSnapshot((Snapshot)=>
      setEmails(
        Snapshot.docs.map((doc)=>({
      id:doc.id,
      data:doc.data(),
    }))
        )
      );
   
  }, []);





    return (
        <div className="EmailList">
             <div className="EmailList_settings">
             <div className="EmailList_settingsLeft">
<Checkbox/>
<IconButton>
     <ArrowDropDownIcon/>
      </IconButton>
      <IconButton>
     <RedoIcon/>
      </IconButton>
      <IconButton>
     <MoreVertIcon/>
      </IconButton>
</div>
<div className="EmailList_settingsRight">
<IconButton>
     <SettingsIcon/>
      </IconButton>
      <IconButton>
     <ChevronLeftIcon/>
      </IconButton>
      <IconButton>
     <ChevronRightIcon/>
      </IconButton>

      <IconButton>
     <KeyboardHideIcon/>
      </IconButton>


          </div>
        </div>


        <div className="EmailList_sections">
<Section Icon={InboxIcon} title="primary" color='red' selected/>
<Section Icon={PeopleIcon} title="social" color='black' />
<Section Icon={LocalOfferIcon} title="Promotions" color='green' />
 </div>

<div className="EmailList_list">
  {emails.map(({ id,data:{ to,subject,message,timestamp
}})=>(
<EmailRow
id={id}
key={id}
title={to}
subject={subject}
description={message}
time={new Date(timestamp?.seconds * 1000).toUTCString()}
/>
))};

<EmailRow
title="Twitch"
subject="Hey fellow streamer!!!"
description="this is a test"
time="10pm" />

<EmailRow
title="Twitch"
subject="Hey fellow streamer!!!"
description="this is a DOPE "
time="10pm" />

       </div>
      </div>
    )
}

export default EmailList;