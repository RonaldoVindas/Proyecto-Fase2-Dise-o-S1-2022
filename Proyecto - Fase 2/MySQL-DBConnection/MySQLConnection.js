var mysql = require('mysql');


var conexion = mysql.createConnection({
    host : 'localhost',
    database : 'par',
    user : 'root',
    password : '2296',
});



conexion.connect(function(err) {
    if (err) {
        console.error('Connection Error: ' + err.stack);
        return;
    }
    console.log('MySQL Conectado existosamente con Identificador: ' + conexion.threadId);
});


////////////////////////////////////////////////// CONEXION CON PROCEDIMIENTOS DE MYSQL /////////////////////////////////////////////////////////////////////////

// ============= Tabla: Department =================


function insertDepartment(pName, pDescription) {
    conexion.query('call Control_Department_InsertDepartment(?,?)',[pName, pDescription], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function removeDepartment(pId) {
    conexion.query('call Control_Department_RemoveDepartment(?)',[pId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function updateDepartment(pId, pName, PDescription) {
    conexion.query('call Control_Department_UpdateDepartment(?,?,?)',[pId, pName, PDescription], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function GetDepartmentName(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Department_getDepartmentName(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);
          
        }
      });
    });
}


function GetDepartmentDescription(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Department_getDepartmentDescription(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);
          
        }
      });
    });
}



// ============= Tabla: Email =================


function insertEmail(pName) {
    conexion.query('call Control_Email_InsertEmail(?)',[pName], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function removeEmail(pId) {
    conexion.query('call Control_Email_RemoveEmail(?)',[pId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function updateEmail(pId, pName) {
    conexion.query('call Control_Email_UpdateEmail(?,?)',[pId,pName], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function GetEmailName(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Email_getEmailName(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);
          
        }
      });
    });
}


// ============= Tabla: Parking =================

function InsertParking(pName, pDescription, pLocation, pSchedule) {
    conexion.query('call Control_Email_UpdateEmail(?,?,?,?)',[pName, pDescription, pLocation, pSchedule], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}



function removeParking(pId) {
    conexion.query('call Control_Parking_RemoveParking(?)',[pId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function updateParking(pId, pName, pDescription, pLocation, pSchedule) {
    conexion.query('call Control_Parking_UpdateParking(?,?,?,?,?)',[pId, pName, pDescription, pLocation, pSchedule], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function getAllParkings() {
  return new Promise((resolve, reject) => {
    conexion.query('call Control_Parking_getAllParkings()', (err, result) => {
    if (err) {
      reject(err);
    }
    else {
      resolve(result[0]);
      
    }
  });
});
}


function getAllParkingsLeadership() {
  return new Promise((resolve, reject) => {
    conexion.query('call Control_Parking_getAllParkingsLeadership()', (err, result) => {
    if (err) {
      reject(err);
    }
    else {
      resolve(result[0]);
      
    }
  });
});
}

function getAllParkingsDisable() {
  return new Promise((resolve, reject) => {
    conexion.query('call Control_Parking_getAllParkingsDisabled()', (err, result) => {
    if (err) {
      reject(err);
    }
    else {
      resolve(result[0]);
      
    }
  });
});
}








function GetParkingName(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Parking_getParkingName(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);
          
        }
      });
    });
}

function GetParkingDescription(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Parking_getParkingDescription(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);
          
        }
      });
    });
}

function GetParkingLocation(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Parking_getParkingLocation(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);
          
        }
      });
    });
}



function GetParkingSchedule(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Parking_getParkingSchedule(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

function GetParkingGeneralSpaces(pId) {
  return new Promise((resolve, reject) => {
      conexion.query('SELECT Control_Parking_getGeneralSpaces(?) as data ', [pId],(err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result[0].data);        
      }
    });
  });
}



function GetParkingLeadershipSpaces(pId) {
  return new Promise((resolve, reject) => {
      conexion.query('SELECT Control_Parking_getLeadershipSpaces(?) as data ', [pId],(err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result[0].data);        
      }
    });
  });
}



function GetParkingDisabledSpaces(pId) {
  return new Promise((resolve, reject) => {
      conexion.query('SELECT Control_Parking_getDisabledSpaces(?) as data ', [pId],(err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result[0].data);        
      }
    });
  });
}


function GetParkingOriginalSpaces(pId) {
  return new Promise((resolve, reject) => {
      conexion.query('SELECT Control_Parking_getOriginalSpaces(?) as data ', [pId],(err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result[0].data);        
      }
    });
  });
}














// ============= Tabla: Phone =================

function InsertPhone(pNumber) {
    conexion.query('call Control_Phone_InsertPhone(?)',[pNumber], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function removePhone(pId) {
    conexion.query('call Control_Phone_RemovePhone(?)',[pId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function updatePhone(pId, pNumber) {
    conexion.query('call Control_Phone_UpdatePhone(?, ?)',[pId, pNumber], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function GetPhoneNumber(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Phone_getPhoneNumber(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

// ============= Tabla: User =================



function insertUser(pFullName, pType, pDepartment_id, pPhone_id) {
    conexion.query('call Control_User_InsertUser(?, ?, ?, ?)',[pFullName, pType, pDepartment_id, pPhone_id], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function removeUser(pId) {
    conexion.query('call Control_User_RemoveUser(?)',[pId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function updateUser(pId) {
    conexion.query('call Control_User_UpdateUser(?, ?, ?, ?, ?)',[pId, pFullName, pType, pDepartment_id, pPhone_id], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function GetUserFullname(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_User_getUserFullname(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

function GetUserType(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_User_getUserType(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

function GetUserPhoneId(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_User_getUserPhoneId(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

function GetUserDepartmentId(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_User_getUserDepartmentId(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}


// ============= Tabla: User Has Email=================



function insertUserHasEmail(pUserId, pEmailId) {
    conexion.query('call Control_UserHasEmail_InsertUserHasEmail(?, ?)',[pUserId, pEmailId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function removeUserHasEmail(pUserId) {
    conexion.query('call Control_UserHasEmail_RemoveUserHasEmail(?)',[pUserId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}



function getUserHasEmailUserId(pId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_UserHasEmail_getUserHasEmailUserId(?) as data ', [pId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

function getUserHasEmailEmailId(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_UserHasEmail_getUserHasEmailEmailId(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}




function getUserIdbyEmail(pEmail) {
  return new Promise((resolve, reject) => {
      conexion.query('SELECT Control_UserHasEmail_getIdByEmail(?) as data ', [pEmail],(err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result[0].data);        
      }
    });
  });
}





// ============= Tabla: User Has Vehicle=================

function insertUserHasVehicle(pUserId, pVehicleId) {
    conexion.query('call Control_UserHasVehicle_InsertUserHasVehicle(?, ?)',[pUserId, pVehicleId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function removeUserHasVehicle(pUserId) {
    conexion.query('call Control_UserHasVehicle_RemoveUserHasVehicle(?)',[pUserId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function updateUserHasVehicle(pUserId1, pUserId2, pVehicleId) {
    conexion.query('call Control_UserhasVehicle_UpdateUserHasVehicle(?)',[pUserId1, pUserId2, pVehicleId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function getUserHasVehicleUserId(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_UserHasVehicle_getUserHasVehicleUserId(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

function getUserHasVehicleVehicleId(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_UserHasVehicle_getUserHasVehicleVehicleId(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}


// ============= Tabla: User Reserve Parking=================

function insertUserReserveParking(pUserId,pParkingId, pDescription, pReserveDay, pDateTimeStart, pDateTimeFinal) {
    conexion.query('call Control_UserReserveParking_InsertUserReserveParking(?, ?, ?, ?,  ?, ?)',[pUserId, pParkingId, pDescription, pReserveDay, pDateTimeStart, pDateTimeFinal], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function removeUserReserveParking(pUserId) {
    conexion.query('call Control_UserReserveParking_RemoveUserReserveParking(?)',[pUserId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function updateUserReserveParking(pUserId1, pUserId2, pVehicleId) {
    conexion.query('call Control_UserReserveParking_UpdateUserReserveParking(?, ?, ?, ?, ?, ?)',[pId, pUserId,pParkingId, pDescription, pDateTimeStart, pDateTimeFinal], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function getUserReserveParkingDateTimeStart(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_UserReserveParking_getUserReserveParkingDateTimeStart(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}


function getUserReserveParkingDateTimeFinal(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_UserReserveParking_getUserReserveParkingDateTimeFinal(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

function getUserReserveParkingDescription(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_UserReserveParking_getUserReserveParkingDescription(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

function getUserReserveParkingParkingId(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_UserReserveParking_getUserReserveParkingParkingId(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}

function getUserReserveParkingUserId(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_UserReserveParking_getUserReserveParkingUserId(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
  
}

function getUserReserveParkingreserveDay(pUserId) {
  return new Promise((resolve, reject) => {
      conexion.query('SELECT Control_UserReserveParking_getUserReserveParkingReserveDay(?) as data ', [pUserId],(err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result[0].data);        
      }
    });
  });

}



// ============= Tabla: Vehicle =================

function insertVehicle(pVehicleId, pBrand, pSeries) {
    conexion.query('call Control_Vehicle_InsertVehicle(?, ?, ?)',[pVehicleId, pBrand, pSeries], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function removeVehicle(pVehicleId) {
    conexion.query('call Control_Vehicle_RemoveVehicle(?)',[pVehicleId], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}


function updateVehicle(pVehicleId, pBrand, pSeries) {
    conexion.query('call Control_Vehicle_UpdateVehicle(?, ?, ?)',[pVehicleId, pBrand, pSeries], function (error, results, fields) {
        if (error)
            throw error;
        console.log('Transacción existosa');
    });
}

function getVehicleBrand(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Vehicle_getBrand(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}



function getVehicleSeries(pUserId) {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT Control_Vehicle_getSeries(?) as data ', [pUserId],(err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(result[0].data);        
        }
      });
    });
}


// ============= Consultas Extra =================


function existsEmail(pEmail) {
  return new Promise((resolve, reject) => {
      conexion.query('SELECT ExistsEmailInDatabase(?) as data ', [pEmail],(err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result[0].data);        
      }
    });
  });
}

function howManySpacesOccupedinHour(pParking, pDay, pStart, pFinal) {
  return new Promise((resolve, reject) => {
      conexion.query('SELECT Query_howManySpacesOccupedInHour(?,?,?,?) as data ', [pParking,pDay, pStart,pFinal ],(err, result) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(result[0]);        
      }
    });
  });
}


///============================================== ////// ==================================================== //////// ================================================== //

module.exports = { insertDepartment, removeDepartment, updateDepartment, GetDepartmentName, GetDepartmentDescription, 
                insertEmail, removeEmail, updateEmail, GetEmailName,
                InsertParking, removeParking, updateParking, GetParkingName, GetParkingDescription, GetParkingLocation, GetParkingSchedule, GetParkingGeneralSpaces, GetParkingLeadershipSpaces, GetParkingDisabledSpaces, GetParkingOriginalSpaces, getAllParkings,
                InsertPhone, removePhone, updatePhone, GetPhoneNumber,
                insertUser, removeUser, updateUser, GetUserFullname, GetUserType, GetUserPhoneId, GetUserDepartmentId,
                insertUserHasEmail, removeUserHasEmail, getUserHasEmailUserId, getUserHasEmailEmailId,
                insertUserHasVehicle, removeUserHasVehicle, updateUserHasVehicle, getUserHasVehicleUserId, getUserHasVehicleVehicleId, 
                insertUserReserveParking, removeUserReserveParking, updateUserReserveParking, getUserReserveParkingDateTimeStart, getUserReserveParkingDateTimeFinal, getUserReserveParkingDescription, getUserReserveParkingParkingId, getUserReserveParkingUserId, getUserReserveParkingreserveDay,
                insertVehicle, removeVehicle, updateVehicle, getVehicleBrand, getVehicleSeries,
                existsEmail, howManySpacesOccupedinHour, getUserIdbyEmail, getAllParkingsLeadership, getAllParkingsDisable
              }