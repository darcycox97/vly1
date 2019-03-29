import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';
import slug from 'limax';
import Volunteer from './volunteer';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getVolunteers(req, res) {
  Volunteer.find().sort('-dateAdded').exec((err, volunteers) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ volunteers });
  });
}

/**
 * Get a single volunteer
 * @param req
 * @param res
 * @returns void
 */
export function getVolunteer(req, res) {
  Volunteer.findOne({ cuid: req.params.cuid }).exec((err, volunteer) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ volunteer });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addVolunteer(req, res) {
  if (!req.body.volunteer.name) {
    res.status(403).end();
  }

  const newVol = new Volunteer(req.body.volunteer);

  // Let's sanitize inputs
  newVol.name = sanitizeHtml(newVol.name);
  newVol.cuid = cuid();
  newVol.slug = slug(newVol.name.toLowerCase(), { lowercase: true });
  newVol.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ volunteer: saved });
    }
  });
}

export function updateVolunteer(req, res) {
  if (!req.body.volunteer.name || !req.body.volunteer.cuid) {
    res.status(403).end();
    return;
  }

  const id = req.body.volunteer.cuid;
  Volunteer.findOne({ cuid: id }).exec((err, volunteer) => {
    if (err) {
      res.status('404').send('Not Found');
    } else {
      const newVol = req.body.volunteer;
      const changedVol = volunteer;
      changedVol.name = newVol.name;
      changedVol.slug = slug(newVol.name.toLowerCase(), { lowercase: true });
      changedVol.save((err1, saved) => {
        if (err1) {
          res.status(500).end();
        } else {
          res.json({ volunteer: saved });
        }
      });
    }
  });
}

export function deleteVolunteer(req, res) {
  Volunteer.findOne({ cuid: req.params.cuid }).exec((err, volunteer) => {
    if (err || !volunteer) {
      res.status(500).send(err);
      return;
    }

    volunteer.remove(() => {
      res.status(200).end();
    });
  });
}
