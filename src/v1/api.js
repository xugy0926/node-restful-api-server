import express from 'express';
import * as learnJS from '../controllers/learnJS';

const router = express.Router();

router.get('/learnJS/sayToMe', learnJS.sayToMe);
router.post('/learnJS/sayToMe', learnJS.addSayToMe);
// router.put('/learnJS/sayToMe', learnJS.updateSayToMe);
router.delete('/learnJS/sayToMe', learnJS.deleteSayToMe);

// course
router.get('/learnJS/course/:id/detail', learnJS.courseInfo);
router.get('/learnJS/course/:id/catelog', learnJS.catelog);
router.put('/learnJS/course/:id/catelog', learnJS.updateCatelog);
router.get('/learnJS/course/:id/words', learnJS.words);
router.put('/learnJS/course/:id/words', learnJS.updateWords);
router.get('/learnJS/course/:id/homework', learnJS.homeworkInfo);
router.get('/learnJS/course/:id/homework/:number', learnJS.homework);
router.put('/learnJS/course/:id/homework/:number', learnJS.updateHomework);
router.get('/learnJS/course/:id/teams', learnJS.teams);
router.put('/learnJS/course/:id/teams', learnJS.updateTeams);

export default router;
