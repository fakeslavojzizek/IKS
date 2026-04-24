import { useState } from 'react';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  date: string;
  website?: string;
}

export function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: 'WebMaster2000',
      message: 'Cool site! Love the retro vibes! Check out my page too!',
      date: '04/10/2026',
      website: 'http://www.coolsite.com'
    },
    {
      id: 2,
      name: 'SurferDude',
      message: 'Awesome homepage dude! This takes me back to the good old days of the internet!',
      date: '04/12/2026'
    },
    {
      id: 3,
      name: 'NetNinja',
      message: 'Great design! Your GIF collection is amazing! 🌟',
      date: '04/14/2026',
      website: 'http://netninja.net'
    }
  ]);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.trim() && message.trim()) {
      const newEntry: GuestbookEntry = {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        date: new Date().toLocaleDateString('en-US'),
        website: website.trim() || undefined
      };

      setEntries([newEntry, ...entries]);
      setName('');
      setMessage('');
      setWebsite('');
    }
  };

  return (
    <div id="guestbook" className="retro-panel p-6">
      <h2 className="retro-subtitle text-3xl mb-4">📝 Sign My Guestbook!</h2>
      
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <div>
          <label className="block font-bold mb-1">Name: *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="guestbook-input"
            placeholder="Enter your name..."
            required
          />
        </div>
        
        <div>
          <label className="block font-bold mb-1">Website (optional):</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="guestbook-input"
            placeholder="http://..."
          />
        </div>
        
        <div>
          <label className="block font-bold mb-1">Message: *</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="guestbook-textarea"
            placeholder="Leave me a message..."
            required
          />
        </div>
        
        <button type="submit" className="retro-button px-6 py-2">
          ✍️ Sign Guestbook
        </button>
      </form>

      <div className="retro-divider mb-4"></div>

      <h3 className="text-xl font-bold mb-3">Recent Entries:</h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {entries.map((entry) => (
          <div key={entry.id} className="guestbook-entry">
            <div className="flex justify-between items-start mb-2">
              <div className="font-bold text-lg">
                {entry.website ? (
                  <a href={entry.website} className="retro-link" target="_blank" rel="noopener noreferrer">
                    {entry.name}
                  </a>
                ) : (
                  entry.name
                )}
              </div>
              <div className="text-sm text-gray-600">{entry.date}</div>
            </div>
            <div className="text-sm">{entry.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
