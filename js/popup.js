let windowObjectReference = null; // global variable

function openRequestedPopup(strUrl,strWindowName) {
    if(windowObjectReference == null || windowObjectReference.closed) {
        windowObjectReference = window.open(strUrl,strWindowName,"width=1000,height=500,resizable,scrollbars=yes,status=1");
        }
    else {
        windowObjectReference.focus();
        }
    }
