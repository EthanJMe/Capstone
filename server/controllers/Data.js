import ListData from "../schemas/ListDataSchema.js";

export const getListData = async (req, res) => {
    try {
        const Data = await ListData.find();
        console.log(Data)
        res.status(200).json(Data)
    } catch (e) {
        res.status(404).json({message: e})
    }
}