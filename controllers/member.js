import member from "../models/member.js";


export default {
    addmember: async (req, res) => {
        try {
            const { name, fees_received, Image, month, date } = req.body;
            // const buffer = Buffer.from(Image);
            console.log(`image is ${Image}`);
            const data = await member.create({
                name: name,
                fees_received: fees_received,
                Image: Image,
                month, date
            })
            if (data) return res.json({ msg: "members added" });
            return res.json({ msg: "failed to add member" });
        } catch (error) {
            throw (error);
        }
    }
    ,
    getallmember: async (req, res) => {
        try {
            const members = await member.find({ _id: { $ne: req.params.id } }).select([
                // "_id",
                "name",
                "fees_received",
                "Image",
                "month",
                "date"
            ]);
            return res.status(200).json({ success: true, members });

        } catch (error) {
            throw (error);
            return res.status(500).json({ success: false, error: error });
        }
    },
    updatemember: async (req, res) => {
        try {
            const { id } = req.body;
            console.log(`id is ${id}`);
            member.findById(
                id,
            ).then(user => {
                var currmonth = user.month;
                if (parseInt(currmonth) != 12) {
                    user.month = (parseInt(currmonth) + 1).toString();
                    user.save();
                }
                else {
                    user.month = "1";
                    user.save();
                }
            });
            return res.json({ msg: "updated" });
        } catch (error) {
            return res.json({ msg: "not updated" });
            throw (error);
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.body;
            console.log(`id is ${id}`);
            member.findByIdAndDelete(id)
                .then(deletedUser => {
                    if (deletedUser) {
                        console.log('Document deleted:');
                    } else {
                        console.log('Document not found');
                    }
                });
            return res.json({ msg: "deleted" });
        } catch (error) {
            return res.json({ msg: "not deleted" });
            throw (error);
        }
    }
}