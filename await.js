async function getButter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Butter');
    }, 1000);
  });
}

async function getColdDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Cold Drinks');
    }, 1000);
  });
}

async function createPost(postData) {
  try {
    const response = await fetch('your-api-url', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error creating post: ${error}`);
  }
}

async function deletePost(postId) {
  try {
    const response = await fetch(`your-api-url/${postId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error deleting post: ${error}`);
  }
}

async function main() {
  try {
    const butter = await getButter();
    console.log(`Husband got ${butter}`);
    
    const drinks = await getColdDrinks();
    console.log(`Husband got ${drinks}`);
    
    const post = await createPost({ title: 'New Post', content: 'This is a new post.' });
    console.log(post.message);
    
    const deleteResponse = await deletePost(1); // Assuming postId 1 exists
    console.log(deleteResponse.message);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

main();
