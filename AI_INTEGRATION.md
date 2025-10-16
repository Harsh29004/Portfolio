# 🤖 AI Integration Guide

This guide shows you how to enhance your portfolio with real AI APIs for more dynamic and intelligent features.

## Overview

The portfolio currently works with fallback responses, but you can integrate real AI services for:
- More intelligent chatbot conversations
- Dynamic bio generation
- Advanced project explanations
- Resume analysis
- Natural language understanding

## Option 1: OpenAI API (Recommended)

### Setup

1. **Get API Key**
   - Visit https://platform.openai.com
   - Sign up / Log in
   - Navigate to API Keys section
   - Create new secret key

2. **Install Package**
```bash
cd backend
pip install openai
```

3. **Update backend/.env**
```
OPENAI_API_KEY=sk-your-api-key-here
```

4. **Implement in backend/app.py**

```python
import openai
import os

openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data.get('message', '')
    
    try:
        # System prompt with resume context
        system_prompt = f"""You are Harsh Panchal's AI assistant. 
        Answer questions about:
        - Skills: {', '.join(PORTFOLIO_DATA['skills']['programming'] + PORTFOLIO_DATA['skills']['ai_ml'])}
        - Education: {PORTFOLIO_DATA['education']}
        - Projects: {', '.join([p['title'] for p in PORTFOLIO_DATA['projects']])}
        - Contact: {PORTFOLIO_DATA['contact']['email']}
        
        Be friendly, professional, and concise. Highlight strengths and expertise."""
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}
            ],
            max_tokens=200,
            temperature=0.7
        )
        
        return jsonify({
            'response': response.choices[0].message.content,
            'timestamp': datetime.now().isoformat()
        })
    except Exception as e:
        # Fallback to local logic
        return jsonify({'response': generate_local_response(user_message)})
```

### Cost Optimization
- Use `gpt-3.5-turbo` (cheaper) instead of `gpt-4`
- Set `max_tokens` limit (150-200 tokens)
- Implement caching for common questions
- Monitor usage on OpenAI dashboard

---

## Option 2: Google Gemini API (Free Tier Available)

### Setup

1. **Get API Key**
   - Visit https://makersuite.google.com/app/apikey
   - Create API key
   - Free tier: 60 requests/minute

2. **Install Package**
```bash
pip install google-generativeai
```

3. **Update backend/.env**
```
GOOGLE_GEMINI_API_KEY=your-api-key-here
```

4. **Implement**

```python
import google.generativeai as genai
import os

genai.configure(api_key=os.getenv('GOOGLE_GEMINI_API_KEY'))

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data.get('message', '')
    
    try:
        model = genai.GenerativeModel('gemini-pro')
        
        prompt = f"""You are an AI assistant for Harsh Panchal's portfolio.
        
        Context:
        - AI & Data Science Engineer
        - Skills: Python, TensorFlow, React, Flask
        - Projects: Forest Fire Detection, Diamond Price Predictor
        - Email: harshpanchal2904@gmail.com
        
        User question: {user_message}
        
        Provide a helpful, concise response."""
        
        response = model.generate_content(prompt)
        
        return jsonify({
            'response': response.text,
            'timestamp': datetime.now().isoformat()
        })
    except Exception as e:
        return jsonify({'response': generate_local_response(user_message)})
```

---

## Option 3: Hugging Face (Free & Open Source)

### Setup

1. **Get API Token**
   - Visit https://huggingface.co/settings/tokens
   - Create token

2. **Install Package**
```bash
pip install transformers torch
```

3. **Implement**

```python
from transformers import pipeline, Conversation

# Initialize chatbot (first time will download model)
chatbot = pipeline("conversational", model="microsoft/DialoGPT-medium")

@app.route('/api/chatbot', methods=['POST'])
def chatbot_endpoint():
    data = request.json
    user_message = data.get('message', '')
    
    try:
        conversation = Conversation(user_message)
        conversation = chatbot(conversation)
        
        return jsonify({
            'response': conversation.generated_responses[-1],
            'timestamp': datetime.now().isoformat()
        })
    except Exception as e:
        return jsonify({'response': generate_local_response(user_message)})
```

---

## Option 4: Anthropic Claude (Advanced)

### Setup

1. **Get API Key**
   - Visit https://console.anthropic.com
   - Create API key

2. **Install**
```bash
pip install anthropic
```

3. **Implement**

```python
import anthropic
import os

client = anthropic.Anthropic(api_key=os.getenv('ANTHROPIC_API_KEY'))

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data.get('message', '')
    
    try:
        response = client.messages.create(
            model="claude-3-sonnet-20240229",
            max_tokens=200,
            messages=[
                {"role": "user", "content": f"You are Harsh Panchal's AI assistant. {user_message}"}
            ]
        )
        
        return jsonify({
            'response': response.content[0].text,
            'timestamp': datetime.now().isoformat()
        })
    except Exception as e:
        return jsonify({'response': generate_local_response(user_message)})
```

---

## Advanced Features

### 1. Bio Generation with AI

```python
@app.route('/api/generate-bio', methods=['POST'])
def generate_bio():
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{
                "role": "user",
                "content": f"""Generate a compelling professional bio for:
                Name: {PORTFOLIO_DATA['name']}
                Title: {PORTFOLIO_DATA['title']}
                Skills: {', '.join(PORTFOLIO_DATA['skills']['ai_ml'])}
                Projects: {', '.join([p['title'] for p in PORTFOLIO_DATA['projects']])}
                
                Make it impressive, concise (3-4 sentences), and recruiter-friendly."""
            }],
            max_tokens=150
        )
        
        return jsonify({
            'bio': response.choices[0].message.content,
            'generated_at': datetime.now().isoformat()
        })
    except Exception as e:
        # Fallback bio
        return jsonify({'bio': 'Fallback bio text...'})
```

### 2. Intelligent Project Recommendations

```python
@app.route('/api/recommend-projects', methods=['POST'])
def recommend_projects():
    data = request.json
    query = data.get('query', '')
    
    try:
        # Use AI to understand intent
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{
                "role": "user",
                "content": f"""User query: "{query}"
                
                Projects available:
                {json.dumps([p['title'] for p in PORTFOLIO_DATA['projects']])}
                
                Which projects (by index 1-4) are most relevant? 
                Respond with only comma-separated numbers."""
            }],
            max_tokens=20
        )
        
        recommendations = [int(x.strip()) for x in response.choices[0].message.content.split(',')]
        
        return jsonify({
            'recommendations': recommendations,
            'query': query
        })
    except Exception as e:
        # Fallback logic
        return jsonify({'recommendations': [1, 2]})
```

### 3. Resume Analysis & Suggestions

```python
@app.route('/api/analyze-resume', methods=['POST'])
def analyze_resume():
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{
                "role": "user",
                "content": f"""Analyze this resume profile and provide 3-4 specific suggestions:
                
                Skills: {json.dumps(PORTFOLIO_DATA['skills'])}
                Projects: {json.dumps([p['title'] for p in PORTFOLIO_DATA['projects']])}
                Certifications: {json.dumps(PORTFOLIO_DATA['certifications'])}
                
                Format as JSON with: category, suggestion, priority (high/medium/low)"""
            }],
            max_tokens=300
        )
        
        suggestions = json.loads(response.choices[0].message.content)
        
        return jsonify({
            'suggestions': suggestions,
            'overall_score': 85,
            'generated_at': datetime.now().isoformat()
        })
    except Exception as e:
        # Fallback suggestions
        return jsonify({'suggestions': [...]})
```

---

## Caching Strategy

Implement Redis caching to reduce API costs:

```python
import redis
import json

redis_client = redis.Redis(host='localhost', port=6379, decode_responses=True)

def get_cached_response(key):
    return redis_client.get(key)

def cache_response(key, value, expiry=3600):
    redis_client.setex(key, expiry, json.dumps(value))

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message', '')
    cache_key = f"chat:{hash(user_message)}"
    
    # Check cache first
    cached = get_cached_response(cache_key)
    if cached:
        return jsonify(json.loads(cached))
    
    # Generate new response
    response = generate_ai_response(user_message)
    
    # Cache for 1 hour
    cache_response(cache_key, response, 3600)
    
    return jsonify(response)
```

---

## Rate Limiting

Protect your API keys:

```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["100 per hour"]
)

@app.route('/api/chatbot', methods=['POST'])
@limiter.limit("20 per minute")
def chatbot():
    # Your implementation
    pass
```

---

## Environment Variables for Production

Add to Vercel:

```bash
# In Vercel Dashboard -> Settings -> Environment Variables
OPENAI_API_KEY=sk-...
GOOGLE_GEMINI_API_KEY=...
ANTHROPIC_API_KEY=...
REDIS_URL=redis://...
```

---

## Cost Comparison

| Service | Free Tier | Cost | Best For |
|---------|-----------|------|----------|
| OpenAI GPT-3.5 | $5 credit | $0.002/1K tokens | Best quality |
| Google Gemini | 60 req/min | Free (limited) | Budget-friendly |
| Hugging Face | Unlimited | Free | Open source |
| Anthropic Claude | $5 credit | $0.003/1K tokens | Advanced reasoning |

---

## Testing AI Integration

```python
# Test script
if __name__ == '__main__':
    # Test chatbot
    test_message = "What are your skills?"
    response = chatbot(test_message)
    print(f"Q: {test_message}")
    print(f"A: {response}")
    
    # Test bio generation
    bio = generate_bio()
    print(f"Bio: {bio}")
```

---

## Monitoring & Analytics

Track AI usage:

```python
import logging

logging.basicConfig(filename='ai_usage.log', level=logging.INFO)

def log_ai_call(endpoint, tokens_used, response_time):
    logging.info(f"{endpoint} | Tokens: {tokens_used} | Time: {response_time}ms")
```

---

## Security Best Practices

1. **Never commit API keys** - Use environment variables
2. **Implement rate limiting** - Prevent abuse
3. **Validate input** - Sanitize user messages
4. **Use HTTPS only** - Secure transmission
5. **Monitor usage** - Set billing alerts
6. **Implement caching** - Reduce costs
7. **Error handling** - Always have fallbacks

---

## Next Steps

1. Choose your AI provider
2. Get API key
3. Install dependencies
4. Update backend code
5. Test locally
6. Add environment variables to Vercel
7. Deploy and monitor!

---

**Need help? Check provider documentation or open an issue!** 🤖
