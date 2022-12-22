
import { SlMenu } from "react-icons/sl";

export default function NavBar(props: any) {

    return (
        <div style={{ display: 'flex', minWidth: '100%', marginTop: 15 }}>
            <SlMenu style={{ width: 30, height: 30, marginLeft: 20, }} />
        </div>
    )
}