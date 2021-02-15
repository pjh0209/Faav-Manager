import axios from "axios"

export default (req, res) => {
    const {
        query: { ids },
    } = req

    if(ids) {
        res.end(`Post: ${ids.join(', ')}`)
    } else {
        res.end("no ids")
    }
}


