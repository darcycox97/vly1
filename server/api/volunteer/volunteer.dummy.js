import Volunteer from './volunteer';

export default function () {
  Volunteer.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const volList = [
      new Volunteer({
        cuid: 'cikqgkv4q01ck7453ualdn3aa',
        name: 'Admin',
        slug: 'vly-admin',
      }),
      new Volunteer({
        cuid: 'cikqgkv4q01ck7453ualdn3ab',
        name: 'Datacom',
        slug: 'datacom',
      }),
      new Volunteer({
        cuid: 'cikqgkv4q01ck7453ualdn3ac',
        name: 'Spark Ltd',
        slug: 'spark',
      }),
      new Volunteer({
        name: 'Westpac Ltd',
        slug: 'westpac',
        cuid: 'cikqgkv4q01ck7453ualdn3ad',
      }),
      new Volunteer({
        name: 'Albany High School',
        slug: 'albany-high',
        cuid: 'cikqgkv4q01ck7453ualdn3ae',
      }),
    ];

    Volunteer.create(volList, (error) => {
      if (!error) {
//        console.log('Loaded Organisations....');
      }
    });
  });
}
