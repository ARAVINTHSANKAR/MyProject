var lastItemName;
var lastQty;
var lastRate;
var lastCGST;
var lastCGSTAmt;
var lastSGST;
var lastSGSTAmt;
var lastIGST;
var lastIGSTAmt;
var lastNetAmt;




function retriveData() {
	 $.get("http://localhost:8080/HibernateRecapJersey/service/student/getAllUsers", function(data, status){
       /*   alert("Data: " + data + "\nStatus: " + status); */
/*          alert(data.length);  */
         
         for (var tableIndex = 0 ; tableIndex <= data.length-1 ; tableIndex++) {
        	 if (tableIndex == data.length - 1) {
        		  lastSNo = 1;
        		  lastItemName = data[tableIndex].itemName;
        		  lastQty = data[tableIndex].qty;
        		  lastRate = data[tableIndex].rate;
        		  //lastCGST = data[tableIndex].cGST;
				  lastCGST = "14.00";  
        		  lastCGSTAmt = ((lastRate * 14 * lastQty) / 100 );
        		  //lastSGST = data[tableIndex].sGST;
        		  lastSGST = "14.00";
				  lastSGSTAmt = ((lastRate * 14 * lastQty) / 100 );
        		  lastIGST    = data[tableIndex].iGST;
        		  lastIGSTAmt = data[tableIndex].iGSTAmt;
        		  //lastNetAmt = data[tableIndex].netAmt;
				  lastNetAmt = (lastRate + lastCGSTAmt + lastSGSTAmt + 0.00) * (lastQty);
        	 }
         }
     });
}

function dataPrinting() {
	retriveData();
	document.getElementById("formSNoId").innerHTML = lastSNo;
	document.getElementById("formItemNameId").innerHTML  = lastItemName;
	document.getElementById("formQtyId").innerHTML  = lastQty;
	document.getElementById("formRateId").innerHTML  = lastRate;
	document.getElementById("formCGSTId").innerHTML  = lastCGST;
	document.getElementById("formCGSTAmtId").innerHTML  = lastCGSTAmt;
	document.getElementById("formSGSTId").innerHTML  = lastSGST;
	document.getElementById("formSGSTAmtId").innerHTML  = lastSGSTAmt;
	document.getElementById("formIGSTId").innerHTML  = lastIGST;
	document.getElementById("formIGSTAmtId").innerHTML  = lastIGSTAmt;
	document.getElementById("formNetAmtId").innerHTML  = lastNetAmt;
	document.getElementById("totalAmtBeforeTaxId").value = lastRate;
	document.getElementById("CGSTrate").value = lastCGSTAmt;
	document.getElementById("SGSTrate").value = lastSGSTAmt;
	document.getElementById("grandTotalId").value = lastNetAmt + ".00";
	confirm("click again to continue");
}

function disableForm() {
	document.getElementById("formId").remove();
	document.getElementById("meenakshiImgId").remove();
}

function retriveEntireDetails() {
	alert("his");
	 $.get("http://localhost:8080/HibernateRecapJersey/service/student/getAllUsers", function(data, status){
          alert("Data: " + data + "\nStatus: " + status); 
			document.getElementById("SalesDetailsTable").innerHTML = "<tr><th>" +"SNo."+ "</th><th>" +"ItemName"+ "</th><th>" +"Qty"+ "</th><th>" +"Rate"+ "</th><th>" +"CGST"+ "</th><th>" +"CGSTAmt"+ "</th><th>" +"SGST"+ "</th><th>" +"SGSTAmt"+ "</th><th>" +"IGST"+ "</th><th>" +"IGSTAmt"+ "</th><th>" +"NetAmt"+ "</th></th>";
     	for (var i = 0; i < data.length ; i ++) {
			document.getElementById("SalesDetailsTable").innerHTML += "<tr><td>" +data[i].sNo+ "</td><td>" +data[i].itemName+ "</td><td>" +data[i].qty+ "</td><td>" +data[i].rate+ "</td><td>" +data[i].cGST+ "</td><td>" +data[i].cGSTAmt+ "</td><td>" +data[i].sGST+ "</td><td>" +data[i].sGSTAmt+ "</td><td>" +data[i].iGST+ "</td><td>" +data[i].iGSTAmt+ "</td><td>" +data[i].netAmt+ "</td></tr>";
		}
	 });
}
