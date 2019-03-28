import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';
import Volunteer from './volunteer'

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
  newVol.name = sanitizeHtml(newPost.name);

  newVol.cuid = cuid();
  newVol.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}
