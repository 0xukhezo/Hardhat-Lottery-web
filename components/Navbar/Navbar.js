import { ConnectButton } from "web3uikit"

function Navbar() {
    return (
        <div className="flex justify-between my-10">
            <h1 className="font-semibold text-3xl">Decentralized Lottery</h1>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
export default Navbar
