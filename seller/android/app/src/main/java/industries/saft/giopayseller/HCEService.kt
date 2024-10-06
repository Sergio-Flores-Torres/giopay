package industries.saft.giopayseller


import android.nfc.cardemulation.HostApduService
import android.os.Bundle
import android.util.Log

class HCEService : HostApduService() {

    override fun onDeactivated(reason: Int) {
        Log.d("SAFT", "Deactivated: $reason")
    }
    override fun processCommandApdu(commandApdu: ByteArray?, extras: Bundle?): ByteArray? {
        return null
    }

}