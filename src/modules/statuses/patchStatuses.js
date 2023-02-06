import Status from './Model';

export default function patchStatuses(req, res) {
  const statusId = req.params.statusId;
  Status.findByIdAndUpdate(statusId, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User update error');
    });
}
