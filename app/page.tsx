import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold">Hello World</h1>
      <div className="grid grid-cols-3 gap-4">
        {'123456789'.split('').map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>This is a card description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button>Click Me</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
