import volunteer from './volunteer';

export default function () {
  Volunteer.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const orgList = [
      new volunteer({
        cuid: 'cikqgkv4q01ck7453ualdn3aa',
        name: 'Admin'
      }),
    ];

    Volunteer.create(orgList, (error) => {
      if (!error) {
//        console.log('Loaded Volunteers....');
      }
    });
  });
}
