import api from "api";
import express, { Request, Response } from "express";

const router = express.Router();

router.get(
  "/",
  async (_, res: Response): Promise<void> => {
    try {
      const { body } = await api.index();
      res.status(200).send(body);
    } catch ({ code, message }) {
      res.status(code || 500).send(message);
    }
  }
);

// TODO: Improve error handling 🥅 by including addl. req/res info from 'got'
router.get(
  "/:id",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { body } = await api.find([Number(req.params.id)]);
      res.status(200).send(body);
    } catch ({ code, message }) {
      res.status(code || 500).send(message);
    }
  }
);

// TODO: Handle case where req.body is already an Array 👇🏾.
router.post("/", (req: Request, res: Response): void => {
  try {
    api.create([req.body]).then(({ body }) => {
      res.status(200).send(body);
    });
  } catch ({ code, message }) {
    res.status(code || 500).send(message);
  }
});

router.put("/", (req: Request, res: Response): void => {
  try {
    api.update([req.body]).then(({ body }) => {
      res.status(200).send(body);
    });
  } catch ({ code, message }) {
    res.status(code || 500).send(message);
  }
});

router.delete("/:id", (req: Request, res: Response): void => {
  try {
    api
      .delete([Number(req.params.id)])
      .then(({ body }) => res.status(200).send(body));
  } catch ({ code, message }) {
    res.status(code || 500).send(message);
  }
});

export default router;
