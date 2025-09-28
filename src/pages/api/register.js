import clientPromise from "../../lib/mongodb";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const client = await clientPromise;
    const users = client.db().collection("users");

    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Missing fields" });

    const existingUser = await users.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await hash(password, 10);

    await users.insertOne({ email, password: hashedPassword });

    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
}
