import Status from './Model';

export default function deleteStatuses(req, res) {

  const statusId = req.params.statusId;
  console.log('req.params', req.params);

  Status.deleteOne({ _id: statusId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Status delete error');
    });
}
