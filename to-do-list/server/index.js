import express from 'express';

const app = express();
app.use(express.json());
const PORT = 3000;

const list =[
    {
        id: 1,
        title: "Assignments",
        status: "Pending",
    },
    {
         id: 2,
        title: "Daily Chores",
        status: "Pending",
    }
]
const item = [
    {
         id: 1,
         list_id: 1,
        title: "Programming",
        status: "Pending",
    },
    {
         id: 2,
         list_id: 1,
        title: "Web Dev",
        status: "Pending",
    },
    {
         id: 3,
         list_id: 2,
        title: "Wash Dish",
        status: "Pending",
    },
    {
         id: 4,
         list_id: 2,
        title: "Clean the room",
        status: "Pending",
    },
    
]

app.get('/', (req, res) =>{
    res.send('Hello from your Express app!'); 
});

app.get('/home', (req, res) =>{
     res.send('Hello!'); 
});

app.get('/get-list', (req, res) =>{
     res.status(200).json({ success: true, list });
});

app.post('/add-list', (req, res) => {
    const { listTitle } = req.body;

    list.push({
        id: list.length +1,
        title: listTitle,
        status: "pending"
    });
    res.status(200).json({ success: true, list, message:"List added successfully" });
});

app.get('/edit-list', (req, res) =>{
    res.send('Hooray!'); 
});

app.get('/delete-list', (req, res) =>{
    res.send('Confused!'); 
});

app.get('/get-items/:id', (req, res) => {
    const listId = req.params.id;
    const filtered = item.filter(
        item => item.list_id == listId);

        if(filtered.length ===0) {
            return res.status(200).json ({ success:false, message: 'list not found'});
        }
   
   
        res.status(200).json({ success:true, items:filtered });
});

app.get('/add-item', (req, res) =>{
    res.send('MEow!'); 
});

app.get('/edit-item', (req, res) =>{
    res.send('Miming!'); 
});

app.get('/delete-item', (req, res) =>{
    res.send('Niko Pangit!'); 
});

app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
});
